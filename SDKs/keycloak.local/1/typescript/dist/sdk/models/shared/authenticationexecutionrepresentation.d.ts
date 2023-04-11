import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON model describing authentication execution
 */
export declare class AuthenticationExecutionRepresentation extends SpeakeasyBase {
    authenticator?: string;
    authenticatorConfig?: string;
    authenticatorFlow?: boolean;
    autheticatorFlow?: boolean;
    flowId?: string;
    id?: string;
    parentFlow?: string;
    priority?: number;
    requirement?: string;
}
