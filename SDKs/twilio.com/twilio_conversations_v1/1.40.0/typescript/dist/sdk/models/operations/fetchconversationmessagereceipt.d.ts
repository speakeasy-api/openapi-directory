import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchConversationMessageReceiptServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchConversationMessageReceiptSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchConversationMessageReceiptRequest extends SpeakeasyBase {
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this message.
     */
    conversationSid: string;
    /**
     * The SID of the message within a [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) the delivery receipt belongs to.
     */
    messageSid: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
}
export declare class FetchConversationMessageReceiptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ConversationConversationMessageConversationMessageReceipt?: shared.ConversationsV1ConversationConversationMessageConversationMessageReceipt;
}
