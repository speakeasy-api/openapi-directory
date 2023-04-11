import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloudassetAnalyzeOrgPoliciesSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudassetAnalyzeOrgPoliciesRequest extends SpeakeasyBase {
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
     * Required. The name of the constraint to analyze organization policies for. The response only contains analyzed organization policies for the provided constraint.
     */
    constraint?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * The expression to filter AnalyzeOrgPoliciesResponse.org_policy_results. The only supported field is `consolidated_policy.attached_resource`, and the only supported operator is `=`. Example: consolidated_policy.attached_resource="//cloudresourcemanager.googleapis.com/folders/001" will return the org policy results of"folders/001".
     */
    filter?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The maximum number of items to return per page. If unspecified, AnalyzeOrgPoliciesResponse.org_policy_results will contain 20 items with a maximum of 200.
     */
    pageSize?: number;
    /**
     * The pagination token to retrieve the next page.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Required. The organization to scope the request. Only organization policies within the scope will be analyzed. * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456")
     */
    scope: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class CloudassetAnalyzeOrgPoliciesResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    analyzeOrgPoliciesResponse?: shared.AnalyzeOrgPoliciesResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
