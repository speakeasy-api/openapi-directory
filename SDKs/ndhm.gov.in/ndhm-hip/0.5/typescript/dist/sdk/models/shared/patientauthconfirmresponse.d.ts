import { SpeakeasyBase } from "../../../internal/utils";
import { AccessTokenValidity } from "./accesstokenvalidity";
import { ErrorT } from "./error";
import { PatientDemographicResponse } from "./patientdemographicresponse";
import { RequestReference } from "./requestreference";
/**
 * depending on the purpose of auth, as specified in /auth/init, the response may include the following
 *
 * @remarks
 *   1. LINK - only returns **accessToken**
 *   2. KYC - only returns **patient**
 *   3. KYC_AND_LINK - returns both **accessToken** and **patient**
 *
 */
export declare class PatientAuthConfirmResponseAuth extends SpeakeasyBase {
    /**
     * access token for initialization of subsequent action.
     */
    accessToken?: string;
    patient?: PatientDemographicResponse;
    validity?: AccessTokenValidity;
}
export declare class PatientAuthConfirmResponse extends SpeakeasyBase {
    /**
     * depending on the purpose of auth, as specified in /auth/init, the response may include the following
     *
     * @remarks
     *   1. LINK - only returns **accessToken**
     *   2. KYC - only returns **patient**
     *   3. KYC_AND_LINK - returns both **accessToken** and **patient**
     *
     */
    auth?: PatientAuthConfirmResponseAuth;
    error?: ErrorT;
    /**
     * a nonce, unique for each HTTP request
     */
    requestId: string;
    resp: RequestReference;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
