import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DataflowProjectsLocationsJobsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsGetSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsJobsGetSecurityOption1;
    option2?: DataflowProjectsLocationsJobsGetSecurityOption2;
    option3?: DataflowProjectsLocationsJobsGetSecurityOption3;
    option4?: DataflowProjectsLocationsJobsGetSecurityOption4;
}
/**
 * The level of information requested in response.
 */
export declare enum DataflowProjectsLocationsJobsGetViewEnum {
    JobViewUnknown = "JOB_VIEW_UNKNOWN",
    JobViewSummary = "JOB_VIEW_SUMMARY",
    JobViewAll = "JOB_VIEW_ALL",
    JobViewDescription = "JOB_VIEW_DESCRIPTION"
}
export declare class DataflowProjectsLocationsJobsGetRequest extends SpeakeasyBase {
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
     * The job ID.
     */
    jobId: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
     */
    location: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * The ID of the Cloud Platform project that the job belongs to.
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
     * The level of information requested in response.
     */
    view?: DataflowProjectsLocationsJobsGetViewEnum;
}
export declare class DataflowProjectsLocationsJobsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    job?: shared.Job;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
