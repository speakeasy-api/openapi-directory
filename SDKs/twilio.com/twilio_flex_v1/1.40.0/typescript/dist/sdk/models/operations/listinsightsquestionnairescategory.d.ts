import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListInsightsQuestionnairesCategoryServerList: readonly ["https://flex-api.twilio.com"];
export declare class ListInsightsQuestionnairesCategorySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListInsightsQuestionnairesCategoryRequest extends SpeakeasyBase {
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
    /**
     * The Token HTTP request header
     */
    token?: string;
}
export declare class ListInsightsQuestionnairesCategoryListInsightsQuestionnairesCategoryResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListInsightsQuestionnairesCategoryListInsightsQuestionnairesCategoryResponse extends SpeakeasyBase {
    categories?: shared.FlexV1InsightsQuestionnairesCategory[];
    meta?: ListInsightsQuestionnairesCategoryListInsightsQuestionnairesCategoryResponseMeta;
}
export declare class ListInsightsQuestionnairesCategoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listInsightsQuestionnairesCategoryResponse?: ListInsightsQuestionnairesCategoryListInsightsQuestionnairesCategoryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
