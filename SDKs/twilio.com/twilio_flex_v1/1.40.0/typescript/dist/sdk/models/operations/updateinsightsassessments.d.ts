import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateInsightsAssessmentsServerList: readonly ["https://flex-api.twilio.com"];
export declare class UpdateInsightsAssessmentsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateInsightsAssessmentsUpdateInsightsAssessmentsRequest extends SpeakeasyBase {
    /**
     * The id of the answer selected by user
     */
    answerId: string;
    /**
     * The answer text selected by user
     */
    answerText: string;
    /**
     * The offset of the conversation
     */
    offset: number;
}
export declare class UpdateInsightsAssessmentsRequest extends SpeakeasyBase {
    /**
     * The id of the assessment to be modified
     */
    assessmentId: string;
    requestBody?: UpdateInsightsAssessmentsUpdateInsightsAssessmentsRequest;
    /**
     * The Token HTTP request header
     */
    token?: string;
}
export declare class UpdateInsightsAssessmentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    flexV1InsightsAssessments?: shared.FlexV1InsightsAssessments;
}
