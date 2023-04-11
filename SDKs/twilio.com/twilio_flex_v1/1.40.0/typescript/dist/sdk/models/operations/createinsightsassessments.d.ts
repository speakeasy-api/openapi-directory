import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateInsightsAssessmentsServerList: readonly ["https://flex-api.twilio.com"];
export declare class CreateInsightsAssessmentsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateInsightsAssessmentsCreateInsightsAssessmentsRequest extends SpeakeasyBase {
    /**
     * The id of the Agent
     */
    agentId: string;
    /**
     * The id of the answer selected by user
     */
    answerId: string;
    /**
     * The answer text selected by user
     */
    answerText: string;
    /**
     * The id of the category
     */
    categoryId: string;
    /**
     * The name of the category
     */
    categoryName: string;
    /**
     * The question Id selected for assessment
     */
    metricId: string;
    /**
     * The question name of the assessment
     */
    metricName: string;
    /**
     * The offset of the conversation.
     */
    offset: number;
    /**
     * Questionnaire Id of the associated question
     */
    questionnaireId: string;
    /**
     * Segment Id of the conversation
     */
    segmentId: string;
    /**
     * Email of the user assessing conversation
     */
    userEmail: string;
    /**
     * Name of the user assessing conversation
     */
    userName: string;
}
export declare class CreateInsightsAssessmentsRequest extends SpeakeasyBase {
    requestBody?: CreateInsightsAssessmentsCreateInsightsAssessmentsRequest;
    /**
     * The Token HTTP request header
     */
    token?: string;
}
export declare class CreateInsightsAssessmentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    flexV1InsightsAssessments?: shared.FlexV1InsightsAssessments;
}
