import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsWorkItemsReportStatusSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption1;
    option2?: DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption2;
    option3?: DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption3;
    option4?: DataflowProjectsLocationsJobsWorkItemsReportStatusSecurityOption4;
}
export declare class DataflowProjectsLocationsJobsWorkItemsReportStatusRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    reportWorkItemStatusRequest?: shared.ReportWorkItemStatusRequest;
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
     * The job which the WorkItem is part of.
     */
    jobId: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.
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
     * The project which owns the WorkItem's job.
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
}
export declare class DataflowProjectsLocationsJobsWorkItemsReportStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    reportWorkItemStatusResponse?: shared.ReportWorkItemStatusResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
