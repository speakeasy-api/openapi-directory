import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateConsentSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: string;
}
export declare class CreateConsentRequest extends SpeakeasyBase {
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
     * Request body for a consents request.
     *
     * @remarks
     *
     */
    consents?: shared.Consents;
}
export declare class CreateConsentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error400AIS?: shared.Error400AIS;
    /**
     * Bad Request
     */
    error400NGAIS?: shared.Error400NGAIS;
    /**
     * Unauthorized
     */
    error401AIS?: shared.Error401AIS;
    /**
     * Unauthorized
     */
    error401NGAIS?: shared.Error401NGAIS;
    /**
     * Forbidden
     */
    error403AIS?: shared.Error403AIS;
    /**
     * Forbidden
     */
    error403NGAIS?: shared.Error403NGAIS;
    /**
     * Not found
     */
    error404AIS?: shared.Error404AIS;
    /**
     * Not found
     */
    error404NGAIS?: shared.Error404NGAIS;
    /**
     * Method Not Allowed
     */
    error405AIS?: shared.Error405AIS;
    /**
     * Method Not Allowed
     */
    error405NGAIS?: shared.Error405NGAIS;
    /**
     * Not Acceptable
     */
    error406AIS?: shared.Error406AIS;
    /**
     * Not Acceptable
     */
    error406NGAIS?: shared.Error406NGAIS;
    /**
     * Conflict
     */
    error409AIS?: shared.Error409AIS;
    /**
     * Conflict
     */
    error409NGAIS?: shared.Error409NGAIS;
    /**
     * Too Many Requests
     */
    error429AIS?: shared.Error429AIS;
    /**
     * Too Many Requests
     */
    error429NGAIS?: shared.Error429NGAIS;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    consentsResponse201?: shared.ConsentsResponse201;
}
