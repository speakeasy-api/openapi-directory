import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DataflowProjectsJobsDebugGetConfigSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsJobsDebugGetConfigSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsJobsDebugGetConfigSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsJobsDebugGetConfigSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsJobsDebugGetConfigSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsJobsDebugGetConfigSecurityOption1;
    option2?: DataflowProjectsJobsDebugGetConfigSecurityOption2;
    option3?: DataflowProjectsJobsDebugGetConfigSecurityOption3;
    option4?: DataflowProjectsJobsDebugGetConfigSecurityOption4;
}
export declare class DataflowProjectsJobsDebugGetConfigRequest extends SpeakeasyBase {
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
export declare class DataflowProjectsJobsDebugGetConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    getDebugConfigResponse?: shared.GetDebugConfigResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
