import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateInsightsQuestionnairesCategoryServerList: readonly ["https://flex-api.twilio.com"];
export declare class UpdateInsightsQuestionnairesCategorySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateInsightsQuestionnairesCategoryUpdateInsightsQuestionnairesCategoryRequest extends SpeakeasyBase {
    /**
     * The name of this category.
     */
    name: string;
}
export declare class UpdateInsightsQuestionnairesCategoryRequest extends SpeakeasyBase {
    /**
     * The ID of the category to be update
     */
    categoryId: string;
    requestBody?: UpdateInsightsQuestionnairesCategoryUpdateInsightsQuestionnairesCategoryRequest;
    /**
     * The Token HTTP request header
     */
    token?: string;
}
export declare class UpdateInsightsQuestionnairesCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    flexV1InsightsQuestionnairesCategory?: shared.FlexV1InsightsQuestionnairesCategory;
}
