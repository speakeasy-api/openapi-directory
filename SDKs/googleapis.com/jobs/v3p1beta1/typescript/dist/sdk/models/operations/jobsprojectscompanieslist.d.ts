import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class JobsProjectsCompaniesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class JobsProjectsCompaniesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class JobsProjectsCompaniesListSecurity extends SpeakeasyBase {
    option1?: JobsProjectsCompaniesListSecurityOption1;
    option2?: JobsProjectsCompaniesListSecurityOption2;
}
export declare class JobsProjectsCompaniesListRequest extends SpeakeasyBase {
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
     * Optional. The maximum number of companies to be returned, at most 100. Default is 100 if a non-positive number is provided.
     */
    pageSize?: number;
    /**
     * Optional. The starting indicator from which to return results.
     */
    pageToken?: string;
    /**
     * Required. Resource name of the project under which the company is created. The format is "projects/{project_id}", for example, "projects/api-test-project".
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
     * Optional. Set to true if the companies requested must have open jobs. Defaults to false. If true, at most page_size of companies are fetched, among which only those with open jobs are returned.
     */
    requireOpenJobs?: boolean;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class JobsProjectsCompaniesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listCompaniesResponse?: shared.ListCompaniesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
