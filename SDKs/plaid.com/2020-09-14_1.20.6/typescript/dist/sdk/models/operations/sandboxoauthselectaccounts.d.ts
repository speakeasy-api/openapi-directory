import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SandboxOauthSelectAccountsRequest extends SpeakeasyBase {
    request: shared.SandboxOauthSelectAccountsRequest;
}
export declare class SandboxOauthSelectAccountsResponse extends SpeakeasyBase {
    contentType: string;
    error?: Record<string, any>;
    sandboxOauthSelectAccountsResponse?: Record<string, any>;
    statusCode: number;
}
