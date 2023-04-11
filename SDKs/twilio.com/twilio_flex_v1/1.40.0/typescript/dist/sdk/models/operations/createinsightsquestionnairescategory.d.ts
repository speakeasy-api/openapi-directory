import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateInsightsQuestionnairesCategoryServerList: readonly ["https://flex-api.twilio.com"];
export declare class CreateInsightsQuestionnairesCategorySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateInsightsQuestionnairesCategoryCreateInsightsQuestionnairesCategoryRequest extends SpeakeasyBase {
    /**
     * The name of this category.
     */
    name: string;
}
export declare class CreateInsightsQuestionnairesCategoryRequest extends SpeakeasyBase {
    requestBody?: CreateInsightsQuestionnairesCategoryCreateInsightsQuestionnairesCategoryRequest;
    /**
     * The Token HTTP request header
     */
    token?: string;
}
export declare class CreateInsightsQuestionnairesCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    flexV1InsightsQuestionnairesCategory?: shared.FlexV1InsightsQuestionnairesCategory;
}
