import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListConversationsRequest extends SpeakeasyBase {
    /**
     * Return the records that occurred before this point in time.
     */
    dateEnd?: string;
    /**
     * Return the records that occurred after this point in time.
     */
    dateStart?: string;
    /**
     * Return the records in ascending or descending order.
     */
    order?: shared.OrderEnum;
    /**
     * Return this amount of records in the response
     */
    pageSize?: number;
    /**
     * Return calls from this index in the response
     */
    recordIndex?: number;
}
export declare class ListConversations200ApplicationJSONEmbeddedConversationsLinksSelf extends SpeakeasyBase {
    /**
     * A link towards a conversation included in Conversation API
     */
    href?: string;
}
export declare class ListConversations200ApplicationJSONEmbeddedConversationsLinks extends SpeakeasyBase {
    self?: ListConversations200ApplicationJSONEmbeddedConversationsLinksSelf;
}
export declare class ListConversations200ApplicationJSONEmbeddedConversations extends SpeakeasyBase {
    links?: ListConversations200ApplicationJSONEmbeddedConversationsLinks;
    /**
     * Unique name for a conversation
     */
    name: string;
    /**
     * The unique identifier for this conversation
     */
    uuid: string;
}
/**
 * A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects
 */
export declare class ListConversations200ApplicationJSONEmbedded extends SpeakeasyBase {
    conversations: ListConversations200ApplicationJSONEmbeddedConversations[];
}
/**
 * List Conversations Response Payload Object.
 */
export declare class ListConversations200ApplicationJSON extends SpeakeasyBase {
    /**
     * A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects
     */
    embedded: ListConversations200ApplicationJSONEmbedded;
    /**
     * A series of links between resources in this API in the http://stateless.co/hal_specification.html.
     */
    links: shared.LinksConversationsList;
    /**
     * The total number of records returned by your request.
     */
    count: number;
    /**
     * The amount of records returned in this response
     */
    pageSize: number;
    /**
     * Return `page_size` amount of conversations from this index in the response. That is, if your request returns 300 conversations, set `record_index` to 5 in order to return conversations 50 to 59. The default value is 0. That is, the first `page_size` calls.
     */
    recordIndex: number;
}
export declare class ListConversationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List Conversations Response Payload Object.
     */
    listConversations200ApplicationJSONObject?: ListConversations200ApplicationJSON;
}
