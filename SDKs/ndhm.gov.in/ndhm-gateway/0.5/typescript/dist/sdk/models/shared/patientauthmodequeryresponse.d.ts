import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationModeEnum } from "./authenticationmodeenum";
import { PatientAuthPurposeEnum } from "./patientauthpurposeenum";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";
export declare class PatientAuthModeQueryResponseAuth extends SpeakeasyBase {
    modes: AuthenticationModeEnum[];
    purpose: PatientAuthPurposeEnum;
}
export declare class PatientAuthModeQueryResponse extends SpeakeasyBase {
    auth?: PatientAuthModeQueryResponseAuth;
    error?: ErrorT;
    requestId: string;
    resp: RequestReference;
    timestamp: Date;
}
