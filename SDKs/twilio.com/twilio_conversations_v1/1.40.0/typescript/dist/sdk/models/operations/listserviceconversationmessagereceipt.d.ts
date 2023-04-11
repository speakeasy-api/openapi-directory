import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListServiceConversationMessageReceiptServerList: readonly ["https://conversations.twilio.com"];
export declare class ListServiceConversationMessageReceiptSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListServiceConversationMessageReceiptRequest extends SpeakeasyBase {
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Message resource is associated with.
     */
    chatServiceSid: string;
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
export declare class ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta extends SpeakeasyBase {
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
export declare class ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse extends SpeakeasyBase {
    deliveryReceipts?: shared.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt[];
    meta?: ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta;
}
export declare class ListServiceConversationMessageReceiptResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listServiceConversationMessageReceiptResponse?: ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
