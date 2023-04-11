import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchConversationsRequest extends SpeakeasyBase {
    /**
     * Client device pixel ratio used to determine thumbnail size (default 1.0).
     */
    devicePixelRatio?: number;
    /**
     * The page of conversations to return.
     */
    page?: number;
    /**
     * The number of conversations to return per page (must be >= 1 and <= 30).
     */
    perPage?: number;
    /**
     * The search query used to find conversations and messages.
     */
    search: string;
}
/**
 * The conversations and paging data.
 */
export declare class SearchConversations200ApplicationJSON extends SpeakeasyBase {
    conversations?: shared.Conversation[];
    page?: number;
    perPage?: number;
    search?: string;
}
export declare class SearchConversationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The conversations and paging data.
     */
    searchConversations200ApplicationJSONObject?: SearchConversations200ApplicationJSON;
}
