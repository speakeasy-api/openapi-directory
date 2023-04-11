import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloudassetAnalyzeMoveSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Analysis view indicating what information should be included in the analysis response. If unspecified, the default view is FULL.
 */
export declare enum CloudassetAnalyzeMoveViewEnum {
    AnalysisViewUnspecified = "ANALYSIS_VIEW_UNSPECIFIED",
    Full = "FULL",
    Basic = "BASIC"
}
export declare class CloudassetAnalyzeMoveRequest extends SpeakeasyBase {
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
     * Required. Name of the Google Cloud folder or organization to reparent the target resource. The analysis will be performed against hypothetically moving the resource to this specified desitination parent. This can only be a folder number (such as "folders/123") or an organization number (such as "organizations/123").
     */
    destinationParent?: string;
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
     * Required. Name of the resource to perform the analysis against. Only Google Cloud projects are supported as of today. Hence, this can only be a project ID (such as "projects/my-project-id") or a project number (such as "projects/12345").
     */
    resource: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * Analysis view indicating what information should be included in the analysis response. If unspecified, the default view is FULL.
     */
    view?: CloudassetAnalyzeMoveViewEnum;
}
export declare class CloudassetAnalyzeMoveResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    analyzeMoveResponse?: shared.AnalyzeMoveResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
