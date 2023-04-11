import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DataflowProjectsLocationsJobsDebugGetConfigSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsDebugGetConfigSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsDebugGetConfigSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsDebugGetConfigSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsLocationsJobsDebugGetConfigSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsJobsDebugGetConfigSecurityOption1;
    option2?: DataflowProjectsLocationsJobsDebugGetConfigSecurityOption2;
    option3?: DataflowProjectsLocationsJobsDebugGetConfigSecurityOption3;
    option4?: DataflowProjectsLocationsJobsDebugGetConfigSecurityOption4;
}
export declare class DataflowProjectsLocationsJobsDebugGetConfigRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    getDebugConfigRequest?: shared.GetDebugConfigRequest;
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
     * The job id.
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
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * The project id.
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
export declare class DataflowProjectsLocationsJobsDebugGetConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    getDebugConfigResponse?: shared.GetDebugConfigResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
