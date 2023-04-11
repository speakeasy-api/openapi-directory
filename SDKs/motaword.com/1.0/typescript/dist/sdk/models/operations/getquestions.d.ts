import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetQuestionsRequest extends SpeakeasyBase {
    /**
     * Project ID
     */
    attachAnswersForProject?: number;
    /**
     * Scope
     */
    scope: string;
    /**
     * Type
     */
    type: string;
}
export declare class GetQuestionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * SurveyQuestionsNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Survey Questions
     */
    surveyQuestions?: shared.SurveyQuestion[];
}
