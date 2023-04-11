import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * List of related resources to include in the response
 */
export declare enum FetchHealthProfileQuestionIncludeEnum {
    QuestionDefinition = "question_definition",
    Answer = "answer"
}
export declare class FetchHealthProfileQuestionRequest extends SpeakeasyBase {
    /**
     * Health profile question identifier
     */
    id: string;
    /**
     * List of related resources to include in the response
     */
    include?: FetchHealthProfileQuestionIncludeEnum;
}
export declare class FetchHealthProfileQuestionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchHealthProfileQuestionResponse?: shared.FetchHealthProfileQuestionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
