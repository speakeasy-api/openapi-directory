import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListInsightsQuestionnairesQuestionServerList: readonly ["https://flex-api.twilio.com"];
export declare class ListInsightsQuestionnairesQuestionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListInsightsQuestionnairesQuestionRequest extends SpeakeasyBase {
    /**
     * The list of category IDs
     */
    categoryId?: string[];
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
export declare class ListInsightsQuestionnairesQuestionListInsightsQuestionnairesQuestionResponseMeta extends SpeakeasyBase {
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
export declare class ListInsightsQuestionnairesQuestionListInsightsQuestionnairesQuestionResponse extends SpeakeasyBase {
    meta?: ListInsightsQuestionnairesQuestionListInsightsQuestionnairesQuestionResponseMeta;
    questions?: shared.FlexV1InsightsQuestionnairesQuestion[];
}
export declare class ListInsightsQuestionnairesQuestionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listInsightsQuestionnairesQuestionResponse?: ListInsightsQuestionnairesQuestionListInsightsQuestionnairesQuestionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
