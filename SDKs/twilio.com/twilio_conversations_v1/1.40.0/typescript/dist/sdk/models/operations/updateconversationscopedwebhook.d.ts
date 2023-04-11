import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateConversationScopedWebhookServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateConversationScopedWebhookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest extends SpeakeasyBase {
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
     * The list of keywords, firing webhook event for this Conversation.
     */
    configurationTriggers?: string[];
    /**
     * The absolute url the webhook request should be sent to.
     */
    configurationUrl?: string;
}
export declare class UpdateConversationScopedWebhookRequest extends SpeakeasyBase {
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this webhook.
     */
    conversationSid: string;
    requestBody?: UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
}
export declare class UpdateConversationScopedWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ConversationConversationScopedWebhook?: shared.ConversationsV1ConversationConversationScopedWebhook;
}
