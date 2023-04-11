import { SpeakeasyBase } from "../../../internal/utils";
import { AccessTokenValidity } from "./accesstokenvalidity";
import { PatientDemographicResponse } from "./patientdemographicresponse";
export declare enum PatientAuthNotificationAuthStatusEnum {
    Granted = "GRANTED",
    Denied = "DENIED"
}
/**
 * depending on the purpose of auth, as specified in /auth/init, the response may include the following
 *
 * @remarks
 *   1. LINK - only returns **accessToken**
 *   2. KYC - only returns **patient**
 *   3. KYC_AND_LINK - returns both **accessToken** and **patient**
 *
 */
export declare class PatientAuthNotificationAuth extends SpeakeasyBase {
    /**
     * access token for initialization of subsequent action.
     */
    accessToken?: string;
    patient?: PatientDemographicResponse;
    status: PatientAuthNotificationAuthStatusEnum;
    /**
     * transaction id for auth session
     */
    transactionId: string;
    validity?: AccessTokenValidity;
}
export declare class PatientAuthNotification extends SpeakeasyBase {
    /**
     * depending on the purpose of auth, as specified in /auth/init, the response may include the following
     *
     * @remarks
     *   1. LINK - only returns **accessToken**
     *   2. KYC - only returns **patient**
     *   3. KYC_AND_LINK - returns both **accessToken** and **patient**
     *
     */
    auth?: PatientAuthNotificationAuth;
    /**
     * a nonce, unique for each HTTP request
     */
    requestId: string;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
