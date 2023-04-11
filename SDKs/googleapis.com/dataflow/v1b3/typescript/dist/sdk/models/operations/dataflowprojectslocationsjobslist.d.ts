import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DataflowProjectsLocationsJobsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsListSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsJobsListSecurityOption1;
    option2?: DataflowProjectsLocationsJobsListSecurityOption2;
    option3?: DataflowProjectsLocationsJobsListSecurityOption3;
    option4?: DataflowProjectsLocationsJobsListSecurityOption4;
}
/**
 * The kind of filter to use.
 */
export declare enum DataflowProjectsLocationsJobsListFilterEnum {
    Unknown = "UNKNOWN",
    All = "ALL",
    Terminated = "TERMINATED",
    Active = "ACTIVE"
}
/**
 * Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews.
 */
export declare enum DataflowProjectsLocationsJobsListViewEnum {
    JobViewUnknown = "JOB_VIEW_UNKNOWN",
    JobViewSummary = "JOB_VIEW_SUMMARY",
    JobViewAll = "JOB_VIEW_ALL",
    JobViewDescription = "JOB_VIEW_DESCRIPTION"
}
export declare class DataflowProjectsLocationsJobsListRequest extends SpeakeasyBase {
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
     * The kind of filter to use.
     */
    filter?: DataflowProjectsLocationsJobsListFilterEnum;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
     */
    location: string;
    /**
     * Optional. The job name. Optional.
     */
    name?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.
     */
    pageSize?: number;
    /**
     * Set this to the 'next_page_token' field of a previous response to request additional results in a long list.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * The project which owns the jobs.
     */
    projectId: string;
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
    /**
     * Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews.
     */
    view?: DataflowProjectsLocationsJobsListViewEnum;
}
export declare class DataflowProjectsLocationsJobsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listJobsResponse?: shared.ListJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
