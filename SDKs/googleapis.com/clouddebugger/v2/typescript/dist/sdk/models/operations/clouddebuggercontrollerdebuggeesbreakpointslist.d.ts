import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ClouddebuggerControllerDebuggeesBreakpointsListSecurity extends SpeakeasyBase {
    option1?: ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1;
    option2?: ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption2;
}
export declare class ClouddebuggerControllerDebuggeesBreakpointsListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Identifies the agent. This is the ID returned in the RegisterDebuggee response.
     */
    agentId?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Required. Identifies the debuggee.
     */
    debuggeeId: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * If set to `true` (recommended), returns `google.rpc.Code.OK` status and sets the `wait_expired` response field to `true` when the server-selected timeout has expired. If set to `false` (deprecated), returns `google.rpc.Code.ABORTED` status when the server-selected timeout has expired.
     */
    successOnTimeout?: boolean;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * A token that, if specified, blocks the method call until the list of active breakpoints has changed, or a server-selected timeout has expired. The value should be set from the `next_wait_token` field in the last response. The initial value should be set to `"init"`.
     */
    waitToken?: string;
}
export declare class ClouddebuggerControllerDebuggeesBreakpointsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listActiveBreakpointsResponse?: shared.ListActiveBreakpointsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
