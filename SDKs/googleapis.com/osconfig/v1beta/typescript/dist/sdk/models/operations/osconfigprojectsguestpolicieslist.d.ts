import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OsconfigProjectsGuestPoliciesListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class OsconfigProjectsGuestPoliciesListRequest extends SpeakeasyBase {
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
     * JSONP
     */
    callback?: string;
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
     * The maximum number of guest policies to return.
     */
    pageSize?: number;
    /**
     * A pagination token returned from a previous call to `ListGuestPolicies` that indicates where this listing should continue from.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the parent using one of the following forms: `projects/{project_number}`.
     */
    parent: string;
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
export declare class OsconfigProjectsGuestPoliciesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listGuestPoliciesResponse?: shared.ListGuestPoliciesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
