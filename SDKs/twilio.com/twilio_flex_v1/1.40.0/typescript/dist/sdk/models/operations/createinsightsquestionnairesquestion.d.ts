import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateInsightsQuestionnairesQuestionServerList: readonly ["https://flex-api.twilio.com"];
export declare class CreateInsightsQuestionnairesQuestionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateInsightsQuestionnairesQuestionCreateInsightsQuestionnairesQuestionRequest extends SpeakeasyBase {
    /**
     * The flag to enable for disable NA for answer.
     */
    allowNa: boolean;
    /**
     * The answer_set for the question.
     */
    answerSetId: string;
    /**
     * The ID of the category
     */
    categoryId: string;
    /**
     * The description for the question.
     */
    description?: string;
    /**
     * The question.
     */
    question: string;
}
export declare class CreateInsightsQuestionnairesQuestionRequest extends SpeakeasyBase {
    requestBody?: CreateInsightsQuestionnairesQuestionCreateInsightsQuestionnairesQuestionRequest;
    /**
     * The Token HTTP request header
     */
    token?: string;
}
export declare class CreateInsightsQuestionnairesQuestionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    flexV1InsightsQuestionnairesQuestion?: shared.FlexV1InsightsQuestionnairesQuestion;
}
