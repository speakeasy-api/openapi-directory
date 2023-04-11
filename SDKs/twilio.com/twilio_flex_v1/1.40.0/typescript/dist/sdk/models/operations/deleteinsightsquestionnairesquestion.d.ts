import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteInsightsQuestionnairesQuestionServerList: readonly ["https://flex-api.twilio.com"];
export declare class DeleteInsightsQuestionnairesQuestionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteInsightsQuestionnairesQuestionRequest extends SpeakeasyBase {
    /**
     * The unique ID of the question
     */
    questionId: string;
    /**
     * The Token HTTP request header
     */
    token?: string;
}
export declare class DeleteInsightsQuestionnairesQuestionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
