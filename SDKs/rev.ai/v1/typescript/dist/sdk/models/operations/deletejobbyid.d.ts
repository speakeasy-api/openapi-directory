import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteJobByIdRequest extends SpeakeasyBase {
    /**
     * Rev.ai API Job Id
     */
    id: string;
}
/**
 * Problem details object returned on errors
 */
export declare class DeleteJobById409ApplicationProblemPlusJson extends SpeakeasyBase {
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
export declare class DeleteJobById404ApplicationProblemPlusJson extends SpeakeasyBase {
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
export declare class DeleteJobById401ApplicationProblemPlusJson extends SpeakeasyBase {
    /**
     * HTTP status code of the error
     */
    status?: number;
    /**
     * Short, human-readable summary of the problem type
     */
    title?: string;
}
export declare class DeleteJobByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Request Unauthorized
     *
     * @remarks
     * ***
     * Caused by an old or invalid [access token](#section/Authentication/Access-Token), try regenerating your token on your [access token page](https://rev.ai/access_token).
     *
     */
    deleteJobById401ApplicationProblemPlusJsonObject?: DeleteJobById401ApplicationProblemPlusJson;
    /**
     * Job Not Found
     */
    deleteJobById404ApplicationProblemPlusJsonObject?: DeleteJobById404ApplicationProblemPlusJson;
    /**
     * Invalid Deletion State
     *
     * @remarks
     *
     */
    deleteJobById409ApplicationProblemPlusJsonObject?: DeleteJobById409ApplicationProblemPlusJson;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
