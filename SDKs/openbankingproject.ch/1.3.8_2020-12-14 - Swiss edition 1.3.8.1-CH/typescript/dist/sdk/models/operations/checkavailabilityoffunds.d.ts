import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CheckAvailabilityOfFundsSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: string;
}
export declare class CheckAvailabilityOfFundsRequest extends SpeakeasyBase {
    /**
     * This field  might be used in case where a consent was agreed between ASPSP and PSU through an OAuth2 based protocol,
     *
     * @remarks
     * facilitated by the TPP.
     *
     */
    authorization?: string;
    /**
     * Is contained if and only if the "Signature" element is contained in the header of the request.
     */
    digest?: string;
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
     * Request body for a confirmation of funds request.
     *
     * @remarks
     *
     */
    confirmationOfFunds: shared.ConfirmationOfFunds;
}
/**
 * Equals "true" if sufficient funds are available at the time of the request,
 *
 * @remarks
 * "false" otherwise.
 *
 */
export declare class CheckAvailabilityOfFunds200ApplicationJSON extends SpeakeasyBase {
    /**
     * Equals true if sufficient funds are available at the time of the request, false otherwise.
     *
     * @remarks
     *
     * This datalemenet is allways contained in a confirmation of funds response.
     *
     * This data element is contained in a payment status response,
     * if supported by the ASPSP, if a funds check has been performed and
     * if the transactionStatus is "ACTC", "ACWC" or "ACCP".
     *
     */
    fundsAvailable: boolean;
}
export declare class CheckAvailabilityOfFundsResponse extends SpeakeasyBase {
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
    error401NGPIIS?: shared.Error401NGPIIS;
    /**
     * Unauthorized
     */
    error401PIIS?: shared.Error401PIIS;
    /**
     * Forbidden
     */
    error403NGPIIS?: shared.Error403NGPIIS;
    /**
     * Forbidden
     */
    error403PIIS?: shared.Error403PIIS;
    /**
     * Not found
     */
    error404NGPIIS?: shared.Error404NGPIIS;
    /**
     * Not found
     */
    error404PIIS?: shared.Error404PIIS;
    /**
     * Method Not Allowed
     */
    error405NGPIIS?: shared.Error405NGPIIS;
    /**
     * Method Not Allowed
     */
    error405PIIS?: shared.Error405PIIS;
    /**
     * Conflict
     */
    error409NGPIIS?: shared.Error409NGPIIS;
    /**
     * Conflict
     */
    error409PIIS?: shared.Error409PIIS;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    checkAvailabilityOfFunds200ApplicationJSONObject?: CheckAvailabilityOfFunds200ApplicationJSON;
}
