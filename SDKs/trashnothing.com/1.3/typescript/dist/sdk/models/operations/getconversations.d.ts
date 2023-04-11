import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConversationsRequest extends SpeakeasyBase {
    /**
     * Used to filter messases by category.  Must be set to one of the following three categories: inbox, archived, blocked
     *
     * @remarks
     *
     */
    category?: string;
    /**
     * Client device pixel ratio used to determine thumbnail size (default 1.0).
     */
    devicePixelRatio?: number;
    /**
     * If set to 1, the num_unread field in the response will be set to the count of the total number of conversations that have unread messages. <br /><br /> This is useful for showing users the total number of unread messages that they have in their inbox. Calculating the count will slow the request down a bit so setting this should be avoided for requests where it's not needed (eg. requesting archived or blocked conversations or requests that are just paging through older conversations).
     *
     * @remarks
     *
     */
    includeNumUnread?: number;
    /**
     * The number of recent messages to return with each conversation. Additional messages can be retrieved using get conversation messages endpoint.
     *
     * @remarks
     *
     */
    numMessages?: number;
    /**
     * The page of conversations to return.
     */
    page?: number;
    /**
     * The number of conversations to return per page (must be >= 1 and <= 30).
     */
    perPage?: number;
}
/**
 * The conversations and paging data.
 */
export declare class GetConversations200ApplicationJSON extends SpeakeasyBase {
    conversations?: shared.Conversation[];
    /**
     * If the include_num_unread parameter is set to 1, this will be set to the total number of conversations that have unread messages matching the query parameters of the request.  If the include_num_unread parameter is set to 0, this will be null.
     *
     * @remarks
     *
     */
    numUnread?: number;
    page?: number;
    perPage?: number;
}
export declare class GetConversationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The conversations and paging data.
     */
    getConversations200ApplicationJSONObject?: GetConversations200ApplicationJSON;
}
