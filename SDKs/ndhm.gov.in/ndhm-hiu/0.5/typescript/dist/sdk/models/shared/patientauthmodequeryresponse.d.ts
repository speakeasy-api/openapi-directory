import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationModeEnum } from "./authenticationmodeenum";
import { ErrorT } from "./error";
import { PatientAuthPurposeEnum } from "./patientauthpurposeenum";
import { RequestReference } from "./requestreference";
export declare class PatientAuthModeQueryResponseAuth extends SpeakeasyBase {
    modes: AuthenticationModeEnum[];
    /**
     * what is the purpose of user auth
     */
    purpose: PatientAuthPurposeEnum;
}
export declare class PatientAuthModeQueryResponse extends SpeakeasyBase {
    auth?: PatientAuthModeQueryResponseAuth;
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
