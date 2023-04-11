import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ConversationsV1ConversationConversationScopedWebhook extends SpeakeasyBase {
    /**
     * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this conversation.
     */
    accountSid?: string;
    /**
     * The configuration of this webhook. Is defined based on target.
     */
    configuration?: any;
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this webhook.
     */
    conversationSid?: string;
    /**
     * The date that this resource was created.
     */
    dateCreated?: Date;
    /**
     * The date that this resource was last updated.
     */
    dateUpdated?: Date;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string;
    /**
     * The target of this webhook: `webhook`, `studio`, `trigger`
     */
    target?: string;
    /**
     * An absolute API resource URL for this webhook.
     */
    url?: string;
}
