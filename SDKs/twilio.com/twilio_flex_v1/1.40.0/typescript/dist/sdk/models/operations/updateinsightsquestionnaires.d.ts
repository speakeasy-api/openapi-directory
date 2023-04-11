import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateInsightsQuestionnairesServerList: readonly ["https://flex-api.twilio.com"];
export declare class UpdateInsightsQuestionnairesSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateInsightsQuestionnairesUpdateInsightsQuestionnairesRequest extends SpeakeasyBase {
    /**
     * The flag to enable or disable questionnaire
     */
    active: boolean;
    /**
     * The description of this questionnaire
     */
    description?: string;
    /**
     * The name of this questionnaire
     */
    name?: string;
    /**
     * The list of questions ids under a questionnaire
     */
    questionIds?: string[];
}
export declare class UpdateInsightsQuestionnairesRequest extends SpeakeasyBase {
    /**
     * The unique ID of the questionnaire
     */
    id: string;
    requestBody?: UpdateInsightsQuestionnairesUpdateInsightsQuestionnairesRequest;
    /**
     * The Token HTTP request header
     */
    token?: string;
}
export declare class UpdateInsightsQuestionnairesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    flexV1InsightsQuestionnaires?: shared.FlexV1InsightsQuestionnaires;
}
