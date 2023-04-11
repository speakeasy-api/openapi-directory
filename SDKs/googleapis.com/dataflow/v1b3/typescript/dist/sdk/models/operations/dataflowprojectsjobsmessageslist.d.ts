import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DataflowProjectsJobsMessagesListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsJobsMessagesListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsJobsMessagesListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsJobsMessagesListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsJobsMessagesListSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsJobsMessagesListSecurityOption1;
    option2?: DataflowProjectsJobsMessagesListSecurityOption2;
    option3?: DataflowProjectsJobsMessagesListSecurityOption3;
    option4?: DataflowProjectsJobsMessagesListSecurityOption4;
}
/**
 * Filter to only get messages with importance >= level
 */
export declare enum DataflowProjectsJobsMessagesListMinimumImportanceEnum {
    JobMessageImportanceUnknown = "JOB_MESSAGE_IMPORTANCE_UNKNOWN",
    JobMessageDebug = "JOB_MESSAGE_DEBUG",
    JobMessageDetailed = "JOB_MESSAGE_DETAILED",
    JobMessageBasic = "JOB_MESSAGE_BASIC",
    JobMessageWarning = "JOB_MESSAGE_WARNING",
    JobMessageError = "JOB_MESSAGE_ERROR"
}
export declare class DataflowProjectsJobsMessagesListRequest extends SpeakeasyBase {
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
     * Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available).
     */
    endTime?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * The job to get messages about.
     */
    jobId: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
     */
    location?: string;
    /**
     * Filter to only get messages with importance >= level
     */
    minimumImportance?: DataflowProjectsJobsMessagesListMinimumImportanceEnum;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * If specified, determines the maximum number of messages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
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
     * If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages).
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
export declare class DataflowProjectsJobsMessagesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listJobMessagesResponse?: shared.ListJobMessagesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
