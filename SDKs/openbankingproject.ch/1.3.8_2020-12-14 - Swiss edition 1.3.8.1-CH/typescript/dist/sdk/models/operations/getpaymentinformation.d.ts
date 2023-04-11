import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPaymentInformationSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: string;
}
export declare class GetPaymentInformationRequest extends SpeakeasyBase {
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
     * The forwarded IP Address header field consists of the corresponding http request IP Address field between PSU and TPP.
     *
     * @remarks
     *
     */
    psuIPAddress?: string;
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
    /**
     * Resource identification of the generated payment initiation resource.
     */
    paymentId: string;
}
export declare class GetPaymentInformationResponse extends SpeakeasyBase {
    body?: Uint8Array;
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
     * OK
     */
    getPaymentInformation200ApplicationJSONOneOf?: any;
}
