import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetJobByIdRequest extends SpeakeasyBase {
    /**
     * Rev.ai API Job Id
     */
    id: string;
}
/**
 * Problem details object returned on errors
 */
export declare class GetJobById404ApplicationProblemPlusJson extends SpeakeasyBase {
    /**
     * HTTP status code of the error
     */
    status?: number;
    /**
     * Short, human-readable summary of the problem type
     */
    title?: string;
    /**
     * URI that identifies the problem
     */
    type?: string;
}
/**
 * Request Unauthorized
 *
 * @remarks
 * ***
 * Caused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).
 *
 */
export declare class GetJobById401ApplicationProblemPlusJson extends SpeakeasyBase {
    /**
     * HTTP status code of the error
     */
    status?: number;
    /**
     * Short, human-readable summary of the problem type
     */
    title?: string;
}
export declare class GetJobByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Request Unauthorized
     *
     * @remarks
     * ***
     * Caused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).
     *
     */
    getJobById401ApplicationProblemPlusJsonObject?: GetJobById401ApplicationProblemPlusJson;
    /**
     * Job Not Found
     */
    getJobById404ApplicationProblemPlusJsonObject?: GetJobById404ApplicationProblemPlusJson;
    /**
     * Transcription Job Details
     */
    job?: shared.Job;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
