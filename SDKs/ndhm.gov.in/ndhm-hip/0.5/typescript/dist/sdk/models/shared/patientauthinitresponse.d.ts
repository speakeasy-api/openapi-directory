import { SpeakeasyBase } from "../../../internal/utils";
import { AuthMeta } from "./authmeta";
import { AuthenticationModeEnum } from "./authenticationmodeenum";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";
export declare class PatientAuthInitResponseAuth extends SpeakeasyBase {
    meta?: AuthMeta;
    mode: AuthenticationModeEnum;
    transactionId: string;
}
export declare class PatientAuthInitResponse extends SpeakeasyBase {
    auth?: PatientAuthInitResponseAuth;
    error?: ErrorT;
    requestId: string;
    resp: RequestReference;
    timestamp: Date;
}
