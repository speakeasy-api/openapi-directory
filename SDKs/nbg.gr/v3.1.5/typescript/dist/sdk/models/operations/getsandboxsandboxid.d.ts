import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSandboxSandboxIdPathParams extends SpeakeasyBase {
    sandboxId: string;
}
export declare class GetSandboxSandboxIdSecurity extends SpeakeasyBase {
    authorizationCodeToken: shared.SchemeAuthorizationCodeToken;
    clientId: shared.SchemeClientId;
}
export declare class GetSandboxSandboxIdRequest extends SpeakeasyBase {
    pathParams: GetSandboxSandboxIdPathParams;
    security: GetSandboxSandboxIdSecurity;
}
export declare class GetSandboxSandboxIdResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    sandbox?: shared.Sandbox;
    statusCode: number;
}
