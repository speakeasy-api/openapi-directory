import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption1;
    option2?: DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption2;
    option3?: DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption3;
    option4?: DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption4;
}
export declare class DataflowProjectsLocationsJobsStagesGetExecutionDetailsRequest extends SpeakeasyBase {
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
     * Upper time bound of work items to include, by start time.
     */
    endTime?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * The job to get execution details for.
     */
    jobId: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
     */
    location: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * If specified, determines the maximum number of work items to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
     */
    pageSize?: number;
    /**
     * If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * A project id.
     */
    projectId: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * The stage for which to fetch information.
     */
    stageId: string;
    /**
     * Lower time bound of work items to include, by start time.
     */
    startTime?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DataflowProjectsLocationsJobsStagesGetExecutionDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    stageExecutionDetails?: shared.StageExecutionDetails;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
