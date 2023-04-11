import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationModeEnum } from "./authenticationmodeenum";
import { AuthMeta } from "./authmeta";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";
export declare class PatientAuthInitResponseAuth extends SpeakeasyBase {
    meta?: AuthMeta;
    /**
     * Subjected to CM specific capability
     *
     * @remarks
     *  1. MOBILE_OTP - for SMS OTP
     *  2. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS
     *  3. AADHAAR_OTP - for auth using OTP sent to Aadhaar number
     *  4. DEMOGRAPHICS - for auth using demographic verification.
     *
     */
    mode: AuthenticationModeEnum;
    transactionId: string;
}
export declare class PatientAuthInitResponse extends SpeakeasyBase {
    auth?: PatientAuthInitResponseAuth;
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
