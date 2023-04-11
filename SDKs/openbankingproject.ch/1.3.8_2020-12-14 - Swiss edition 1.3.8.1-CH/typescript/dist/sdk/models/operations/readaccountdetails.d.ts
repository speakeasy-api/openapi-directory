import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReadAccountDetailsSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: string;
}
export declare class ReadAccountDetailsRequest extends SpeakeasyBase {
    /**
     * This then contains the consentId of the related AIS consent, which was performed prior to this payment initiation.
     *
     * @remarks
     *
     */
    consentID: string;
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
     * The forwarded IP Address header field consists of the corresponding HTTP request
     *
     * @remarks
     * IP Address field between PSU and TPP.
     * It shall be contained if and only if this request was actively initiated by the PSU.
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
     * This identification is denoting the addressed (card) account.
     *
     * @remarks
     * The account-id is retrieved by using a "Read Account List" or "Read Card Account list" call.
     * The account-id is the "resourceId" attribute of the account structure.
     * Its value is constant at least throughout the lifecycle of a given consent.
     *
     */
    accountId: string;
    /**
     * If contained, this function reads the list of accessible payment accounts including the booking balance,
     *
     * @remarks
     * if granted by the PSU in the related consent and available by the ASPSP.
     * This parameter might be ignored by the ASPSP.
     *
     */
    withBalance?: boolean;
}
/**
 * OK
 */
export declare class ReadAccountDetails200ApplicationJSON extends SpeakeasyBase {
    /**
     * The ASPSP shall give at least one of the account reference identifiers:
     *
     * @remarks
     *   - iban
     *   - bban
     *   - pan
     *   - maskedPan
     *   - msisdn
     * If the account is a multicurrency account currency code in "currency" is set to "XXX".
     *
     */
    account: shared.AccountDetails;
}
export declare class ReadAccountDetailsResponse extends SpeakeasyBase {
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
     * OK
     */
    readAccountDetails200ApplicationJSONObject?: ReadAccountDetails200ApplicationJSON;
}
