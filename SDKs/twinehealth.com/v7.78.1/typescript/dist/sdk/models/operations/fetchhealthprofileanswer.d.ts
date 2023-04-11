import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * List of related resources to include in the response
 */
export declare enum FetchHealthProfileAnswerIncludeEnum {
    Patient = "patient"
}
export declare class FetchHealthProfileAnswerRequest extends SpeakeasyBase {
    /**
     * Health profile answer identifier
     */
    id: string;
    /**
     * List of related resources to include in the response
     */
    include?: FetchHealthProfileAnswerIncludeEnum;
}
export declare class FetchHealthProfileAnswerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchHealthProfileAnswerResponse?: shared.FetchHealthProfileAnswerResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
