import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteInsightsQuestionnairesCategoryServerList: readonly ["https://flex-api.twilio.com"];
export declare class DeleteInsightsQuestionnairesCategorySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteInsightsQuestionnairesCategoryRequest extends SpeakeasyBase {
    /**
     * The ID of the category to be deleted
     */
    categoryId: string;
    /**
     * The Token HTTP request header
     */
    token?: string;
}
export declare class DeleteInsightsQuestionnairesCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
