import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsRequest extends SpeakeasyBase {
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
     * Optional. If provided, only returns jobs that completed until (not including) the given timestamp.
     */
    completedUntilTime?: string;
    /**
     * Required. Name of the conversion workspace resource whose jobs are listed, in the form of: projects/{project}/locations/{location}/conversionWorkspaces/{conversion_workspace}.
     */
    conversionWorkspace: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Optional. The maximum number of jobs to return. The service may return fewer than this value. If unspecified, at most 100 jobs are returned. The maximum value is 100; values above 100 are coerced to 100.
     */
    maxSize?: number;
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
     * Optional. Whether or not to return just the most recent job per job type,
     */
    returnMostRecentPerJobType?: boolean;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    searchBackgroundJobsResponse?: shared.SearchBackgroundJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
