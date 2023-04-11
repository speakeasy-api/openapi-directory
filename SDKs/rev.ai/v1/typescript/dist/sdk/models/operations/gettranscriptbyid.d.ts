import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTranscriptByIdRequest extends SpeakeasyBase {
    /**
     * MIME type specifying the transcription output format
     */
    accept?: shared.AcceptTranscriptEnum;
    /**
     * Rev.ai API Job Id
     */
    id: string;
}
/**
 * Problem details object returned on errors
 */
export declare class GetTranscriptById409ApplicationProblemPlusJson extends SpeakeasyBase {
    /**
     * Allowed values for this request
     */
    allowedValues?: string[];
    /**
     * Value passed in given request
     */
    currentValue?: string;
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
    /**
     * URI that identifies the problem
     */
    type?: string;
}
/**
 * Problem details object returned on errors
 */
export declare class GetTranscriptById406ApplicationProblemPlusJson extends SpeakeasyBase {
    /**
     * Allowed values for this request
     */
    allowedValues?: string[];
    /**
     * Value passed in given request
     */
    currentValue?: string;
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
    /**
     * URI that identifies the problem
     */
    type?: string;
}
/**
 * Problem details object returned on errors
 */
export declare class GetTranscriptById404ApplicationProblemPlusJson extends SpeakeasyBase {
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
export declare class GetTranscriptById401ApplicationProblemPlusJson extends SpeakeasyBase {
    /**
     * HTTP status code of the error
     */
    status?: number;
    /**
     * Short, human-readable summary of the problem type
     */
    title?: string;
}
export declare class GetTranscriptByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Request Unauthorized
     *
     * @remarks
     * ***
     * Caused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).
     *
     */
    getTranscriptById401ApplicationProblemPlusJsonObject?: GetTranscriptById401ApplicationProblemPlusJson;
    /**
     * Job Not Found
     */
    getTranscriptById404ApplicationProblemPlusJsonObject?: GetTranscriptById404ApplicationProblemPlusJson;
    /**
     * Invalid Transcript Format
     */
    getTranscriptById406ApplicationProblemPlusJsonObject?: GetTranscriptById406ApplicationProblemPlusJson;
    /**
     * Invalid Job State
     *
     * @remarks
     * ***
     * In case of failure, more details can be found at [`GET /jobs/{id}`](#operation/GetJobById)
     *
     */
    getTranscriptById409ApplicationProblemPlusJsonObject?: GetTranscriptById409ApplicationProblemPlusJson;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Rev.ai API Transcript
     *
     * @remarks
     * ***
     * Note: Transcript output format is required in the Accept header. Output can either be in Rev's JSON format or plaintext.
     *
     */
    transcript?: shared.Transcript;
    /**
     * Rev.ai API Transcript
     *
     * @remarks
     * ***
     * Note: Transcript output format is required in the Accept header. Output can either be in Rev's JSON format or plaintext.
     *
     */
    transcriptText?: string;
}
