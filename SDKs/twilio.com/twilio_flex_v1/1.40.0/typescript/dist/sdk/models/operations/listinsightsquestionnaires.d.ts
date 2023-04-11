import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListInsightsQuestionnairesServerList: readonly ["https://flex-api.twilio.com"];
export declare class ListInsightsQuestionnairesSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListInsightsQuestionnairesRequest extends SpeakeasyBase {
    /**
     * Flag indicating whether to include inactive questionnaires or not
     */
    includeInactive?: boolean;
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
export declare class ListInsightsQuestionnairesListInsightsQuestionnairesResponseMeta extends SpeakeasyBase {
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
export declare class ListInsightsQuestionnairesListInsightsQuestionnairesResponse extends SpeakeasyBase {
    meta?: ListInsightsQuestionnairesListInsightsQuestionnairesResponseMeta;
    questionnaires?: shared.FlexV1InsightsQuestionnaires[];
}
export declare class ListInsightsQuestionnairesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listInsightsQuestionnairesResponse?: ListInsightsQuestionnairesListInsightsQuestionnairesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
