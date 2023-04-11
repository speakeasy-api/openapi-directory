import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListConversationMessageReceiptServerList: readonly ["https://conversations.twilio.com"];
export declare class ListConversationMessageReceiptSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListConversationMessageReceiptRequest extends SpeakeasyBase {
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this message.
     */
    conversationSid: string;
    /**
     * The SID of the message within a [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) the delivery receipt belongs to.
     */
    messageSid: string;
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
export declare class ListConversationMessageReceiptListConversationMessageReceiptResponseMeta extends SpeakeasyBase {
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
export declare class ListConversationMessageReceiptListConversationMessageReceiptResponse extends SpeakeasyBase {
    deliveryReceipts?: shared.ConversationsV1ConversationConversationMessageConversationMessageReceipt[];
    meta?: ListConversationMessageReceiptListConversationMessageReceiptResponseMeta;
}
export declare class ListConversationMessageReceiptResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listConversationMessageReceiptResponse?: ListConversationMessageReceiptListConversationMessageReceiptResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
