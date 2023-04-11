import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloudassetAnalyzeOrgPolicyGovernedAssetsSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudassetAnalyzeOrgPolicyGovernedAssetsRequest extends SpeakeasyBase {
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
     * Required. The name of the constraint to analyze governed assets for. The analysis only contains analyzed organization policies for the provided constraint.
     */
    constraint?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * The expression to filter the governed assets in result. The only supported fields for governed resources are `governed_resource.project` and `governed_resource.folders`. The only supported fields for governed iam policies are `governed_iam_policy.project` and `governed_iam_policy.folders`. The only supported operator is `=`. Example 1: governed_resource.project="projects/12345678" filter will return all governed resources under projects/12345678 including the project ifself, if applicable. Example 2: governed_iam_policy.folders="folders/12345678" filter will return all governed iam policies under folders/12345678, if applicable.
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
     * The maximum number of items to return per page. If unspecified, AnalyzeOrgPolicyGovernedAssetsResponse.governed_assets will contain 100 items with a maximum of 200.
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
     * Required. The organization to scope the request. Only organization policies within the scope will be analyzed. The output assets will also be limited to the ones governed by those in-scope organization policies. * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456")
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
export declare class CloudassetAnalyzeOrgPolicyGovernedAssetsResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    analyzeOrgPolicyGovernedAssetsResponse?: shared.AnalyzeOrgPolicyGovernedAssetsResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
