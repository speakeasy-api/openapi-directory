import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DataflowProjectsJobsDebugSendCaptureSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsJobsDebugSendCaptureSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsJobsDebugSendCaptureSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsJobsDebugSendCaptureSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DataflowProjectsJobsDebugSendCaptureSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsJobsDebugSendCaptureSecurityOption1;
    option2?: DataflowProjectsJobsDebugSendCaptureSecurityOption2;
    option3?: DataflowProjectsJobsDebugSendCaptureSecurityOption3;
    option4?: DataflowProjectsJobsDebugSendCaptureSecurityOption4;
}
export declare class DataflowProjectsJobsDebugSendCaptureRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    sendDebugCaptureRequest?: shared.SendDebugCaptureRequest;
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
export declare class DataflowProjectsJobsDebugSendCaptureResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    sendDebugCaptureResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
