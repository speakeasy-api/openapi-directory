import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteInsightsQuestionnairesServerList: readonly ["https://flex-api.twilio.com"];
export declare class DeleteInsightsQuestionnairesSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteInsightsQuestionnairesRequest extends SpeakeasyBase {
    /**
     * The unique ID of the questionnaire
     */
    id: string;
    /**
     * The Token HTTP request header
     */
    token?: string;
}
export declare class DeleteInsightsQuestionnairesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
