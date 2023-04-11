import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubmitTranscriptionJobMultipartFormDataMedia extends SpeakeasyBase {
    content: Uint8Array;
    media: string;
}
/**
 * Transcription Job Options
 */
export declare class SubmitTranscriptionJobMultipartFormData extends SpeakeasyBase {
    /**
     * Limited to files less than 2GB in size. If the file is larger than 2GB, submit a transcription job using `media_url`. **Note:** Media files longer than 17 hours are not supported for English transcription, and media files longer than 12 hours are not supported for non-English transcription. For non-English jobs, expected turnaround time can be up to 6 hours.
     */
    media?: SubmitTranscriptionJobMultipartFormDataMedia;
    options?: any;
}
/**
 * Payload Too Large
 *
 * @remarks
 * ***
 * Only returned when job is submitted using a local file as part of `multipart/form-data`. Use a `media_url`
 * for files larger than 2GBs
 *
 */
export declare class SubmitTranscriptionJobMultipart413ApplicationProblemPlusJson extends SpeakeasyBase {
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
export declare class SubmitTranscriptionJobMultipart401ApplicationProblemPlusJson extends SpeakeasyBase {
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
export declare class SubmitTranscriptionJobMultipart400ApplicationProblemPlusJson extends SpeakeasyBase {
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
export declare class SubmitTranscriptionJobMultipartResponse extends SpeakeasyBase {
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
    submitTranscriptionJobMultipart400ApplicationProblemPlusJsonObject?: SubmitTranscriptionJobMultipart400ApplicationProblemPlusJson;
    /**
     * Request Unauthorized
     *
     * @remarks
     * ***
     * Caused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).
     *
     */
    submitTranscriptionJobMultipart401ApplicationProblemPlusJsonObject?: SubmitTranscriptionJobMultipart401ApplicationProblemPlusJson;
    /**
     * Payload Too Large
     *
     * @remarks
     * ***
     * Only returned when job is submitted using a local file as part of `multipart/form-data`. Use a `media_url`
     * for files larger than 2GBs
     *
     */
    submitTranscriptionJobMultipart413ApplicationProblemPlusJsonObject?: SubmitTranscriptionJobMultipart413ApplicationProblemPlusJson;
}
