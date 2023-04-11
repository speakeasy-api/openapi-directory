import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchInsightsQuestionnairesServerList: readonly ["https://flex-api.twilio.com"];
export declare class FetchInsightsQuestionnairesSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchInsightsQuestionnairesRequest extends SpeakeasyBase {
    /**
     * The unique ID of the questionnaire
     */
    id: string;
    /**
     * The Token HTTP request header
     */
    token?: string;
}
export declare class FetchInsightsQuestionnairesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    flexV1InsightsQuestionnaires?: shared.FlexV1InsightsQuestionnaires;
}
