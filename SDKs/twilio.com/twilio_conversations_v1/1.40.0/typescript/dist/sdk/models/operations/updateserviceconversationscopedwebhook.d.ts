import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateServiceConversationScopedWebhookServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateServiceConversationScopedWebhookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest extends SpeakeasyBase {
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
     * The list of keywords, firing webhook event for this Conversation.
     */
    configurationTriggers?: string[];
    /**
     * The absolute url the webhook request should be sent to.
     */
    configurationUrl?: string;
}
export declare class UpdateServiceConversationScopedWebhookRequest extends SpeakeasyBase {
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this webhook.
     */
    conversationSid: string;
    requestBody?: UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
}
export declare class UpdateServiceConversationScopedWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ServiceServiceConversationServiceConversationScopedWebhook?: shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook;
}
