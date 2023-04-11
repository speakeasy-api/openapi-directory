import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchConversationScopedWebhookServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchConversationScopedWebhookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchConversationScopedWebhookRequest extends SpeakeasyBase {
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this webhook.
     */
    conversationSid: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
}
export declare class FetchConversationScopedWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ConversationConversationScopedWebhook?: shared.ConversationsV1ConversationConversationScopedWebhook;
}
