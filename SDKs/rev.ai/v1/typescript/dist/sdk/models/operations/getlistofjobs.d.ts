import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetListOfJobsRequest extends SpeakeasyBase {
    /**
     * Limits the number of jobs returned, default is 100, max is 1000
     */
    limit?: number;
    /**
     * If specified, returns transcription jobs submitted before the job with this id, exclusive (job with this id is not included)
     */
    startingAfter?: string;
}
/**
 * Request Unauthorized
 *
 * @remarks
 * ***
 * Caused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).
 *
 */
export declare class GetListOfJobs401ApplicationProblemPlusJson extends SpeakeasyBase {
    /**
     * HTTP status code of the error
     */
    status?: number;
    /**
     * Short, human-readable summary of the problem type
     */
    title?: string;
}
/**
 * Problem details object returned on errors
 */
export declare class GetListOfJobs400ApplicationProblemPlusJson extends SpeakeasyBase {
    /**
     * Invalid properties object where each property is the key, mapped to a list of reasons why the property is invalid
     */
    parameters?: Record<string, any>;
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
export declare class GetListOfJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    getListOfJobs400ApplicationProblemPlusJsonObject?: GetListOfJobs400ApplicationProblemPlusJson;
    /**
     * Request Unauthorized
     *
     * @remarks
     * ***
     * Caused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).
     *
     */
    getListOfJobs401ApplicationProblemPlusJsonObject?: GetListOfJobs401ApplicationProblemPlusJson;
    /**
     * List of Rev.ai Transcription Jobs
     */
    jobs?: shared.Job[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
