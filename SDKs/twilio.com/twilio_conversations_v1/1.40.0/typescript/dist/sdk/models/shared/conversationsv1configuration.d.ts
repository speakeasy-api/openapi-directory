import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class ConversationsV1Configuration extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this configuration.
     */
    accountSid?: string;
    /**
     * The SID of the default [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) used when creating a conversation.
     */
    defaultChatServiceSid?: string;
    /**
     * Default ISO8601 duration when conversation will be switched to `closed` state. Minimum value for this timer is 10 minutes.
     */
    defaultClosedTimer?: string;
    /**
     * Default ISO8601 duration when conversation will be switched to `inactive` state. Minimum value for this timer is 1 minute.
     */
    defaultInactiveTimer?: string;
    /**
     * The SID of the default [Messaging Service](https://www.twilio.com/docs/sms/services/api) used when creating a conversation.
     */
    defaultMessagingServiceSid?: string;
    /**
     * Contains absolute API resource URLs to access the webhook and default service configurations.
     */
    links?: Record<string, any>;
    /**
     * An absolute API resource URL for this global configuration.
     */
    url?: string;
}
