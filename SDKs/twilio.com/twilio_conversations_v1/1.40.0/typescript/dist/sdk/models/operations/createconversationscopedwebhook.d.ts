import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateConversationScopedWebhookServerList: readonly ["https://conversations.twilio.com"];
export declare class CreateConversationScopedWebhookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateConversationScopedWebhookCreateConversationScopedWebhookRequest extends SpeakeasyBase {
    /**
     * The list of events, firing webhook event for this Conversation.
     */
    configurationFilters?: string[];
    /**
     * The studio flow SID, where the webhook should be sent to.
     */
    configurationFlowSid?: string;
    configurationMethod?: shared.ConversationScopedWebhookEnumMethodEnum;
    /**
     * The message index for which and it's successors the webhook will be replayed. Not set by default
     */
    configurationReplayAfter?: number;
    /**
     * The list of keywords, firing webhook event for this Conversation.
     */
    configurationTriggers?: string[];
    /**
     * The absolute url the webhook request should be sent to.
     */
    configurationUrl?: string;
    target: shared.ConversationScopedWebhookEnumTargetEnum;
}
export declare class CreateConversationScopedWebhookRequest extends SpeakeasyBase {
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this webhook.
     */
    conversationSid: string;
    requestBody?: CreateConversationScopedWebhookCreateConversationScopedWebhookRequest;
}
export declare class CreateConversationScopedWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    conversationsV1ConversationConversationScopedWebhook?: shared.ConversationsV1ConversationConversationScopedWebhook;
}
