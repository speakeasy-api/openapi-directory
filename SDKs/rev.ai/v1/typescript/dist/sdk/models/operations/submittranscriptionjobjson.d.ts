import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Payload Too Large
 *
 * @remarks
 * ***
 * Only returned when job is submitted using a local file as part of `multipart/form-data`. Use a `media_url`
 * for files larger than 2GBs
 *
 */
export declare class SubmitTranscriptionJobJson413ApplicationProblemPlusJson extends SpeakeasyBase {
    /**
     * Human-readable explanation specific to this occurrence of the problem
     */
    detail?: string;
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
 * Request Unauthorized
 *
 * @remarks
 * ***
 * Caused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).
 *
 */
export declare class SubmitTranscriptionJobJson401ApplicationProblemPlusJson extends SpeakeasyBase {
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
export declare class SubmitTranscriptionJobJson400ApplicationProblemPlusJson extends SpeakeasyBase {
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
export declare class SubmitTranscriptionJobJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Transcription Job Details
     */
    job?: shared.Job;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    submitTranscriptionJobJson400ApplicationProblemPlusJsonObject?: SubmitTranscriptionJobJson400ApplicationProblemPlusJson;
    /**
     * Request Unauthorized
     *
     * @remarks
     * ***
     * Caused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).
     *
     */
    submitTranscriptionJobJson401ApplicationProblemPlusJsonObject?: SubmitTranscriptionJobJson401ApplicationProblemPlusJson;
    /**
     * Payload Too Large
     *
     * @remarks
     * ***
     * Only returned when job is submitted using a local file as part of `multipart/form-data`. Use a `media_url`
     * for files larger than 2GBs
     *
     */
    submitTranscriptionJobJson413ApplicationProblemPlusJsonObject?: SubmitTranscriptionJobJson413ApplicationProblemPlusJson;
}
