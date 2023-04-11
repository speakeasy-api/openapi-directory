import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCaptionsRequest extends SpeakeasyBase {
    /**
     * MIME type specifying the caption output format
     */
    accept?: shared.AcceptCaptionEnum;
    /**
     * Rev.ai API Job Id
     */
    id: string;
    /**
     * Identifies which channel of the job output to caption. Default is `null` which works only for jobs with no `speaker_channels_count` provided during job submission.
     */
    speakerChannel?: number;
}
/**
 * Problem details object returned on errors
 */
export declare class GetCaptions409ApplicationProblemPlusJson extends SpeakeasyBase {
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
export declare class GetCaptions406ApplicationProblemPlusJson extends SpeakeasyBase {
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
export declare class GetCaptions405ApplicationProblemPlusJson extends SpeakeasyBase {
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
export declare class GetCaptions404ApplicationProblemPlusJson extends SpeakeasyBase {
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
export declare class GetCaptions401ApplicationProblemPlusJson extends SpeakeasyBase {
    /**
     * HTTP status code of the error
     */
    status?: number;
    /**
     * Short, human-readable summary of the problem type
     */
    title?: string;
}
export declare class GetCaptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Request Unauthorized
     *
     * @remarks
     * ***
     * Caused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).
     *
     */
    getCaptions401ApplicationProblemPlusJsonObject?: GetCaptions401ApplicationProblemPlusJson;
    /**
     * Job Not Found
     */
    getCaptions404ApplicationProblemPlusJsonObject?: GetCaptions404ApplicationProblemPlusJson;
    /**
     * Invalid Job Property
     */
    getCaptions405ApplicationProblemPlusJsonObject?: GetCaptions405ApplicationProblemPlusJson;
    /**
     * Invalid Caption Format
     */
    getCaptions406ApplicationProblemPlusJsonObject?: GetCaptions406ApplicationProblemPlusJson;
    /**
     * Invalid Job State
     *
     * @remarks
     * ***
     * In case of failure, more details can be found at [`GET /jobs/{id}`](#operation/GetJobById)
     *
     */
    getCaptions409ApplicationProblemPlusJsonObject?: GetCaptions409ApplicationProblemPlusJson;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
