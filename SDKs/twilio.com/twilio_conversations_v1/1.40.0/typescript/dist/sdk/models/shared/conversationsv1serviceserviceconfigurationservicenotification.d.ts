import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class ConversationsV1ServiceServiceConfigurationServiceNotification extends SpeakeasyBase {
    /**
     * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this configuration.
     */
    accountSid?: string;
    /**
     * The Push Notification configuration for being added to a Conversation.
     */
    addedToConversation?: any;
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Configuration applies to.
     */
    chatServiceSid?: string;
    /**
     * Weather the notification logging is enabled.
     */
    logEnabled?: boolean;
    /**
     * The Push Notification configuration for New Messages.
     */
    newMessage?: any;
    /**
     * The Push Notification configuration for being removed from a Conversation.
     */
    removedFromConversation?: any;
    /**
     * An absolute API resource URL for this configuration.
     */
    url?: string;
}
