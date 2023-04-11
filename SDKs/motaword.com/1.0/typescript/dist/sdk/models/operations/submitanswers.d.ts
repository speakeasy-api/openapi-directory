import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubmitAnswersRequest extends SpeakeasyBase {
    surveyAnswers?: shared.SurveyAnswers;
    /**
     * Scope
     */
    scope: string;
    /**
     * Type
     */
    type: string;
}
export declare class SubmitAnswersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * FailedToSubmitSurveyAnswers
     */
    error?: shared.ErrorT;
    /**
     * Survey Answers
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
