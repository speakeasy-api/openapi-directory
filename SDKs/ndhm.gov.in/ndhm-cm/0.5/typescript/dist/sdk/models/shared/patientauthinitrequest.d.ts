import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationModeEnum } from "./authenticationmodeenum";
import { PatientAuthPurposeEnum } from "./patientauthpurposeenum";
import { PatientAuthRequester } from "./patientauthrequester";
export declare class PatientAuthInitRequestQuery extends SpeakeasyBase {
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
    authMode?: AuthenticationModeEnum;
    /**
     * id  of the patient understood by the CM
     */
    id: string;
    /**
     * what is the purpose of user auth
     */
    purpose: PatientAuthPurposeEnum;
    /**
     * identification of requester
     */
    requester: PatientAuthRequester;
}
export declare class PatientAuthInitRequest extends SpeakeasyBase {
    query: PatientAuthInitRequestQuery;
    /**
     * a nonce, unique for each HTTP request
     */
    requestId: string;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
