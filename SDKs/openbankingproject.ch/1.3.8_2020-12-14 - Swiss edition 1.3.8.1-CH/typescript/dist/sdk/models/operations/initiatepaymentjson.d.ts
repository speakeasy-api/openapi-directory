import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InitiatePaymentJsonSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: string;
}
export declare class InitiatePaymentJsonRequest extends SpeakeasyBase {
    /**
     * This data element may be contained, if the payment initiation transaction is part of a session, i.e. combined AIS/PIS service.
     *
     * @remarks
     * This then contains the consentId of the related AIS consent, which was performed prior to this payment initiation.
     *
     */
    consentID?: string;
    /**
     * Is contained if and only if the "Signature" element is contained in the header of the request.
     */
    digest?: string;
    /**
     * The forwarded IP Accept header fields consist of the corresponding HTTP request Accept header fields between PSU and TPP, if available.
     *
     * @remarks
     *
     */
    psuAccept?: string;
    /**
     * The forwarded IP Accept header fields consist of the corresponding HTTP request Accept header fields between PSU and TPP, if available.
     *
     * @remarks
     *
     */
    psuAcceptCharset?: string;
    /**
     * The forwarded IP Accept header fields consist of the corresponding HTTP request Accept header fields between PSU and TPP, if available.
     *
     * @remarks
     *
     */
    psuAcceptEncoding?: string;
    /**
     * The forwarded IP Accept header fields consist of the corresponding HTTP request Accept header fields between PSU and TPP, if available.
     *
     * @remarks
     *
     */
    psuAcceptLanguage?: string;
    /**
     * Might be mandated in the ASPSP's documentation. Only used in a corporate context.
     *
     * @remarks
     *
     */
    psuCorporateID?: string;
    /**
     * Might be mandated in the ASPSP's documentation. Only used in a corporate context.
     *
     * @remarks
     *
     */
    psuCorporateIDType?: string;
    /**
     * UUID (Universally Unique Identifier) for a device, which is used by the PSU, if available.
     *
     * @remarks
     * UUID identifies either a device or a device dependant application installation.
     * In case of an installation identification this ID needs to be unaltered until removal from device.
     *
     */
    psuDeviceID?: string;
    /**
     * The forwarded Geo Location of the corresponding http request between PSU and TPP if available.
     *
     * @remarks
     *
     */
    psuGeoLocation?: string;
    /**
     * HTTP method used at the PSU ? TPP interface, if available.
     *
     * @remarks
     * Valid values are:
     * * GET
     * * POST
     * * PUT
     * * PATCH
     * * DELETE
     *
     */
    psuHttpMethod?: shared.PSUHttpMethodEnum;
    /**
     * Client ID of the PSU in the ASPSP client interface.
     *
     * @remarks
     *
     * Might be mandated in the ASPSP's documentation.
     *
     * It might be contained even if an OAuth2 based authentication was performed in a pre-step or an OAuth2 based SCA was performed in an preceding
     * AIS service in the same session.
     * In this case the ASPSP might check whether PSU-ID and token match,
     * according to ASPSP documentation.
     *
     */
    psuId?: string;
    /**
     * Type of the PSU-ID, needed in scenarios where PSUs have several PSU-IDs as access possibility.
     *
     * @remarks
     *
     * In this case, the mean and use are then defined in the ASPSP's documentation.
     *
     */
    psuIDType?: string;
    /**
     * The forwarded IP Address header field consists of the corresponding http request IP Address field between PSU and TPP.
     *
     * @remarks
     * If not available, the TPP shall use the IP Address used by the TPP when submitting this request.
     *
     */
    psuIPAddress: string;
    /**
     * The forwarded IP Port header field consists of the corresponding HTTP request IP Port field between PSU and TPP, if available.
     *
     * @remarks
     *
     */
    psuIPPort?: string;
    /**
     * The forwarded Agent header field of the HTTP request between PSU and TPP, if available.
     *
     * @remarks
     *
     */
    psuUserAgent?: string;
    /**
     * JSON request body for a payment inition request message.
     *
     * @remarks
     *
     * There are the following payment-products supported:
     *   * "domestic-swiss-credit-transfers-isr"
     *   * "domestic-swiss-credit-transfers"
     *   * "domestic-swiss-credit-transfers-qr"
     *   * "domestic-swiss-foreign-credit-transfers"
     *   * "swiss-sepa-credit-transfers" with JSON-Body
     *   * "swiss-cross-border-credit-transfers" with JSON-Body
     *   * "pain.001-sepa-credit-transfers" with XML pain.001.001.03 body for SCT scheme
     *     Only country specific schemes are currently available
     *   * "pain.001-cross-border-credit-transfers" with pain.001 body.
     *     Only country specific schemes are currently available
     *   * "pain.001-swiss-six-credit-transfers"
     *
     * There are the following payment-services supported:
     *   * "payments"
     *   * "periodic-payments"
     *   * "bulk-paments"
     *
     * All optional, conditional and predefined but not yet used fields are defined.
     *
     */
    requestBody: any;
    /**
     * A signature of the request by the TPP on application level. This might be mandated by ASPSP.
     *
     * @remarks
     *
     */
    signature?: string;
    /**
     * This header might be used by TPPs to inform the ASPSP about the brand used by the TPP towards the PSU.
     *
     * @remarks
     * This information is meant for logging entries to enhance communication between ASPSP and PSU or ASPSP and TPP.
     * This header might be ignored by the ASPSP.
     *
     */
    tppBrandLoggingInformation?: string;
    /**
     * If it equals "true", the TPP prefers to start the authorisation process separately,
     *
     * @remarks
     * e.g. because of the usage of a signing basket.
     * This preference might be ignored by the ASPSP, if a signing basket is not supported as functionality.
     *
     * If it equals "false" or if the parameter is not used, there is no preference of the TPP.
     * This especially indicates that the TPP assumes a direct authorisation of the transaction in the next step,
     * without using a signing basket.
     *
     */
    tppExplicitAuthorisationPreferred?: boolean;
    /**
     * If this URI is contained, the TPP is asking to redirect the transaction flow to this address instead of the TPP-Redirect-URI in case
     *
     * @remarks
     * of a negative result of the redirect SCA method. This might be ignored by the ASPSP.
     *
     */
    tppNokRedirectURI?: string;
    /**
     * The string has the form
     *
     * @remarks
     *
     * status=X1, ..., Xn
     *
     * where Xi is one of the constants SCA, PROCESS, LAST and where constants are not
     * repeated.
     * The usage of the constants supports the of following semantics:
     *
     *   SCA: A notification on every change of the scaStatus attribute for all related authorisation processes is preferred by the TPP.
     *
     *   PROCESS: A notification on all changes of consentStatus or transactionStatus attributes is preferred by the TPP.
     *   LAST: Only a notification on the last consentStatus or transactionStatus as available in the XS2A interface is preferred by the TPP.
     *
     * This header field may be ignored, if the ASPSP does not support resource notification services for the related TPP.
     *
     */
    tppNotificationContentPreferred?: string;
    /**
     * URI for the Endpoint of the TPP-API to which the status of the payment initiation should be sent.
     *
     * @remarks
     * This header field may by ignored by the ASPSP.
     *
     * For security reasons, it shall be ensured that the TPP-Notification-URI as introduced above is secured by the TPP eIDAS QWAC used for identification of the TPP. The following applies:
     *
     * URIs which are provided by TPPs in TPP-Notification-URI shall comply with the domain secured by the eIDAS QWAC certificate of the TPP in the field CN or SubjectAltName of the certificate. Please note that in case of example-TPP.com as certificate entry TPP- Notification-URI like www.example-TPP.com/xs2a-client/v1/ASPSPidentifcation/mytransaction- id/notifications or notifications.example-TPP.com/xs2a-client/v1/ASPSPidentifcation/mytransaction- id/notifications would be compliant.
     *
     * Wildcard definitions shall be taken into account for compliance checks by the ASPSP.
     *  ASPSPs may respond with ASPSP-Notification-Support set to false, if the provided URIs do not comply.
     *
     */
    tppNotificationURI?: string;
    /**
     * If it equals "true", the TPP prefers a redirect over an embedded SCA approach.
     *
     * @remarks
     * If it equals "false", the TPP prefers not to be redirected for SCA. The ASPSP will then choose between the Embedded or the Decoupled
     * SCA approach, depending on the choice of the SCA procedure by the TPP/PSU.
     * If the parameter is not used, the ASPSP will choose the SCA approach to be applied depending on the SCA method chosen by the
     * TPP/PSU.
     *
     */
    tppRedirectPreferred?: boolean;
    /**
     * URI of the TPP, where the transaction flow shall be redirected to after a Redirect.
     *
     * @remarks
     *
     * Mandated for the Redirect SCA Approach, specifically
     * when TPP-Redirect-Preferred equals "true".
     * It is recommended to always use this header field.
     *
     * **Remark for Future:**
     * This field might be changed to mandatory in the next version of the specification.
     *
     */
    tppRedirectURI?: string;
    /**
     * If it equals "true" then the TPP prefers a rejection of the payment initiation in case the ASPSP is
     *
     * @remarks
     * providing an integrated confirmation of funds request an the result of this is that not sufficient
     * funds are available.
     *
     * If it equals "false" then the TPP prefers that the ASPSP is dealing with the payment initiation like
     * in the ASPSPs online channel, potentially waiting for a certain time period for funds to arrive to initiate the payment.
     *
     * This parameter might be ignored by the ASPSP.
     *
     */
    tppRejectionNoFundsPreferred?: boolean;
    /**
     * The certificate used for signing the request, in base64 encoding.
     *
     * @remarks
     * Must be contained if a signature is contained.
     *
     */
    tppSignatureCertificate?: string;
    /**
     * ID of the request, unique to the call, as determined by the initiating party.
     */
    xRequestID: string;
    /**
     * The addressed payment product endpoint, e.g. for SEPA Credit Transfers (SCT).
     *
     * @remarks
     * The ASPSP will publish which of the payment products/endpoints will be supported.
     *
     * The following payment products are supported:
     *   - domestic-swiss-credit-transfers-isr
     *   - domestic-swiss-credit-transfers
     *   - domestic-swiss-credit-transfers-qr
     *   - domestic-swiss-foreign-credit-transfers
     *   - swiss-sepa-credit-transfers
     *   - swiss-cross-border-credit-transfers
     *   - pain.001-sepa-credit-transfers
     *   - pain.001-cross-border-credit-transfers
     *   - pain.001-swiss-six-credit-transfers
     *
     * **Remark:** For all SEPA Credit Transfer based endpoints which accept XML encoding,
     * the XML pain.001 schemes provided by EPC are supported by the ASPSP as a minimum for the body content.
     * Further XML schemes might be supported by some communities.
     *
     * **Remark:** For cross-border and TARGET-2 payments only community wide pain.001 schemes do exist.
     * There are plenty of country specificic scheme variants.
     *
     */
    paymentProduct: shared.PaymentProductEnum;
    /**
     * Payment service:
     *
     * @remarks
     *
     * Possible values are:
     * * payments
     * * bulk-payments
     * * periodic-payments
     *
     */
    paymentService: shared.PaymentServiceEnum;
}
export declare class InitiatePaymentJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error400NGPIS?: shared.Error400NGPIS;
    /**
     * Bad Request
     */
    error400PIS?: shared.Error400PIS;
    /**
     * Unauthorized
     */
    error401NGPIS?: shared.Error401NGPIS;
    /**
     * Unauthorized
     */
    error401PIS?: shared.Error401PIS;
    /**
     * Forbidden
     */
    error403NGPIS?: shared.Error403NGPIS;
    /**
     * Forbidden
     */
    error403PIS?: shared.Error403PIS;
    /**
     * Not found
     */
    error404NGPIS?: shared.Error404NGPIS;
    /**
     * Not found
     */
    error404PIS?: shared.Error404PIS;
    /**
     * Method Not Allowed
     */
    error405NGPIS?: shared.Error405NGPIS;
    /**
     * Method Not Allowed
     */
    error405PIS?: shared.Error405PIS;
    /**
     * Conflict
     */
    error409NGPIS?: shared.Error409NGPIS;
    /**
     * Conflict
     */
    error409PIS?: shared.Error409PIS;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * CREATED
     */
    paymentInitationRequestResponse201?: shared.PaymentInitationRequestResponse201;
}
