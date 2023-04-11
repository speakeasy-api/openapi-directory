import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateInsightsQuestionnairesQuestionServerList: readonly ["https://flex-api.twilio.com"];
export declare class UpdateInsightsQuestionnairesQuestionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateInsightsQuestionnairesQuestionUpdateInsightsQuestionnairesQuestionRequest extends SpeakeasyBase {
    /**
     * The flag to enable for disable NA for answer.
     */
    allowNa: boolean;
    /**
     * The answer_set for the question.
     */
    answerSetId?: string;
    /**
     * The ID of the category
     */
    categoryId?: string;
    /**
     * The description for the question.
     */
    description?: string;
    /**
     * The question.
     */
    question?: string;
}
export declare class UpdateInsightsQuestionnairesQuestionRequest extends SpeakeasyBase {
    /**
     * The unique ID of the question
     */
    questionId: string;
    requestBody?: UpdateInsightsQuestionnairesQuestionUpdateInsightsQuestionnairesQuestionRequest;
    /**
     * The Token HTTP request header
     */
    token?: string;
}
export declare class UpdateInsightsQuestionnairesQuestionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    flexV1InsightsQuestionnairesQuestion?: shared.FlexV1InsightsQuestionnairesQuestion;
}
