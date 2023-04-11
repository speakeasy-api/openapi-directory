import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurity extends SpeakeasyBase {
    option1?: ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption1;
    option2?: ClouddebuggerDebuggerDebuggeesBreakpointsGetSecurityOption2;
}
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsGetRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * Required. ID of the breakpoint to get.
     */
    breakpointId: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Required. The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
     */
    clientVersion?: string;
    /**
     * Required. ID of the debuggee whose breakpoint to get.
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
export declare class ClouddebuggerDebuggerDebuggeesBreakpointsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    getBreakpointResponse?: shared.GetBreakpointResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
