import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListConversationMessageServerList: readonly ["https://conversations.twilio.com"];
export declare class ListConversationMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListConversationMessageRequest extends SpeakeasyBase {
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for messages.
     */
    conversationSid: string;
    /**
     * The sort order of the returned messages. Can be: `asc` (ascending) or `desc` (descending), with `asc` as the default.
     */
    order?: shared.ConversationMessageEnumOrderTypeEnum;
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
}
export declare class ListConversationMessageListConversationMessageResponseMeta extends SpeakeasyBase {
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
export declare class ListConversationMessageListConversationMessageResponse extends SpeakeasyBase {
    messages?: shared.ConversationsV1ConversationConversationMessage[];
    meta?: ListConversationMessageListConversationMessageResponseMeta;
}
export declare class ListConversationMessageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listConversationMessageResponse?: ListConversationMessageListConversationMessageResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
