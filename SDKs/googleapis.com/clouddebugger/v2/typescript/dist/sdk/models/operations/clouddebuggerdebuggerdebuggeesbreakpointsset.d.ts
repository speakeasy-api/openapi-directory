import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity extends SpeakeasyBase {
    option1?: ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1;
    option2?: ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption2;
}
/**
 * The canary option set by the user upon setting breakpoint.
 */
export declare enum ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum {
    CanaryOptionUnspecified = "CANARY_OPTION_UNSPECIFIED",
    CanaryOptionTryEnable = "CANARY_OPTION_TRY_ENABLE",
    CanaryOptionTryDisable = "CANARY_OPTION_TRY_DISABLE"
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    breakpoint?: shared.Breakpoint;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * The canary option set by the user upon setting breakpoint.
     */
    canaryOption?: ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum;
    /**
     * Required. The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
     */
    clientVersion?: string;
    /**
     * Required. ID of the debuggee where the breakpoint is to be set.
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
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    setBreakpointResponse?: shared.SetBreakpointResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
