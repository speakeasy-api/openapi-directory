import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateServiceConversationScopedWebhookServerList: readonly ["https://conversations.twilio.com"];
export declare class CreateServiceConversationScopedWebhookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest extends SpeakeasyBase {
    /**
     * The list of events, firing webhook event for this Conversation.
     */
    configurationFilters?: string[];
    /**
     * The studio flow SID, where the webhook should be sent to.
     */
    configurationFlowSid?: string;
    configurationMethod?: shared.ServiceConversationScopedWebhookEnumMethodEnum;
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
    target: shared.ServiceConversationScopedWebhookEnumTargetEnum;
}
export declare class CreateServiceConversationScopedWebhookRequest extends SpeakeasyBase {
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this webhook.
     */
    conversationSid: string;
    requestBody?: CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest;
}
export declare class CreateServiceConversationScopedWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    conversationsV1ServiceServiceConversationServiceConversationScopedWebhook?: shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook;
}
