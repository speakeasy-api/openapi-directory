import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConversationsRequest extends SpeakeasyBase {
    /**
     * The cursor to start returning results from.
     *
     * @remarks
     *
     * You are not expected to provide this manually, but to follow the url provided in `_links.next.href` in the response which contains a `cursor` value
     *
     */
    cursor?: string;
    /**
     * Search for conversations created before this ISO8601 date
     */
    dateEnd?: string;
    /**
     * Search for conversations created after this ISO8601 date
     */
    dateStart?: string;
    /**
     * Show the most (`desc`) / least (`asc`) recently created entries first
     */
    order?: shared.OrderEnum;
    /**
     * The number of results returned per page.   The default value is `10`. The maximum value is `100`.
     */
    pageSize?: number;
}
export declare class GetConversations200ApplicationJSONEmbeddedData extends SpeakeasyBase {
    /**
     * List of conversations matching the provided filter
     */
    conversations?: shared.ConversationList[];
}
export declare class GetConversations200ApplicationJSONEmbedded extends SpeakeasyBase {
    data?: GetConversations200ApplicationJSONEmbeddedData;
}
export declare class GetConversations200ApplicationJSONLinksFirst extends SpeakeasyBase {
    href?: string;
}
export declare class GetConversations200ApplicationJSONLinksNext extends SpeakeasyBase {
    href?: string;
}
export declare class GetConversations200ApplicationJSONLinksPrev extends SpeakeasyBase {
    href?: string;
}
export declare class GetConversations200ApplicationJSONLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetConversations200ApplicationJSONLinks extends SpeakeasyBase {
    first?: GetConversations200ApplicationJSONLinksFirst;
    next?: GetConversations200ApplicationJSONLinksNext;
    prev?: GetConversations200ApplicationJSONLinksPrev;
    self?: GetConversations200ApplicationJSONLinksSelf;
}
/**
 * OK
 */
export declare class GetConversations200ApplicationJSON extends SpeakeasyBase {
    embedded?: GetConversations200ApplicationJSONEmbedded;
    links?: GetConversations200ApplicationJSONLinks;
    /**
     * Current cursor
     */
    cursor?: string;
    /**
     * The number of results returned on this page.
     */
    pageSize?: number;
}
export declare class GetConversationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getConversations200ApplicationJSONObject?: GetConversations200ApplicationJSON;
}
