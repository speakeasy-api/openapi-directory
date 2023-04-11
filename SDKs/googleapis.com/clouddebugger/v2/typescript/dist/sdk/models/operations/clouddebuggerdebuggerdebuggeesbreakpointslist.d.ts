import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity extends SpeakeasyBase {
    option1?: ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1;
    option2?: ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption2;
}
/**
 * Only breakpoints with the specified action will pass the filter.
 */
export declare enum ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnum {
    Capture = "CAPTURE",
    Log = "LOG"
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Only breakpoints with the specified action will pass the filter.
     */
    actionValue?: ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnum;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Required. The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
     */
    clientVersion?: string;
    /**
     * Required. ID of the debuggee whose breakpoints to list.
     */
    debuggeeId: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * When set to `true`, the response includes the list of breakpoints set by any user. Otherwise, it includes only breakpoints set by the caller.
     */
    includeAllUsers?: boolean;
    /**
     * When set to `true`, the response includes active and inactive breakpoints. Otherwise, it includes only active breakpoints.
     */
    includeInactive?: boolean;
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
     * This field is deprecated. The following fields are always stripped out of the result: `stack_frames`, `evaluated_expressions` and `variable_table`.
     */
    stripResults?: boolean;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * A wait token that, if specified, blocks the call until the breakpoints list has changed, or a server selected timeout has expired. The value should be set from the last response. The error code `google.rpc.Code.ABORTED` (RPC) is returned on wait timeout, which should be called again with the same `wait_token`.
     */
    waitToken?: string;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listBreakpointsResponse?: shared.ListBreakpointsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
