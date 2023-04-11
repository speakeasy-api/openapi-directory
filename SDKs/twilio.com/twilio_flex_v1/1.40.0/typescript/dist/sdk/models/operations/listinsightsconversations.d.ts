import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListInsightsConversationsServerList: readonly ["https://flex-api.twilio.com"];
export declare class ListInsightsConversationsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListInsightsConversationsRequest extends SpeakeasyBase {
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
     * Unique Id of the segment for which conversation details needs to be fetched
     */
    segmentId?: string;
    /**
     * The Token HTTP request header
     */
    token?: string;
}
export declare class ListInsightsConversationsListInsightsConversationsResponseMeta extends SpeakeasyBase {
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
export declare class ListInsightsConversationsListInsightsConversationsResponse extends SpeakeasyBase {
    conversations?: shared.FlexV1InsightsConversations[];
    meta?: ListInsightsConversationsListInsightsConversationsResponseMeta;
}
export declare class ListInsightsConversationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listInsightsConversationsResponse?: ListInsightsConversationsListInsightsConversationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
