import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateInsightsQuestionnairesServerList: readonly ["https://flex-api.twilio.com"];
export declare class CreateInsightsQuestionnairesSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateInsightsQuestionnairesCreateInsightsQuestionnairesRequest extends SpeakeasyBase {
    /**
     * The flag to enable or disable questionnaire
     */
    active?: boolean;
    /**
     * The description of this questionnaire
     */
    description?: string;
    /**
     * The name of this questionnaire
     */
    name: string;
    /**
     * The list of questions ids under a questionnaire
     */
    questionIds?: string[];
}
export declare class CreateInsightsQuestionnairesRequest extends SpeakeasyBase {
    requestBody?: CreateInsightsQuestionnairesCreateInsightsQuestionnairesRequest;
    /**
     * The Token HTTP request header
     */
    token?: string;
}
export declare class CreateInsightsQuestionnairesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    flexV1InsightsQuestionnaires?: shared.FlexV1InsightsQuestionnaires;
}
