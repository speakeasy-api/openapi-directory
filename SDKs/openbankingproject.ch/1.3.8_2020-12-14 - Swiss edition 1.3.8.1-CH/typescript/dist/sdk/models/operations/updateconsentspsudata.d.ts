import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateConsentsPsuDataSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: string;
}
export declare class UpdateConsentsPsuDataRequest extends SpeakeasyBase {
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
    requestBody?: any;
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
     * Resource identification of the related SCA.
     */
    authorisationId: string;
    /**
     * ID of the corresponding consent object as returned by an account information consent request.
     *
     * @remarks
     *
     */
    consentId: string;
}
export declare class UpdateConsentsPsuDataResponse extends SpeakeasyBase {
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
    updateConsentsPsuData200ApplicationJSONOneOf?: any;
}
