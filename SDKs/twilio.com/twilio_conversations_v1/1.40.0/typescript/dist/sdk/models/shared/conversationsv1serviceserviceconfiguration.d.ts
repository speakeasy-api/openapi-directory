import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class ConversationsV1ServiceServiceConfiguration extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the Service configuration resource.
     */
    chatServiceSid?: string;
    /**
     * The service-level role assigned to users when they are added to the service. See the [Conversation Role](https://www.twilio.com/docs/conversations/api/role-resource) for more info about roles.
     */
    defaultChatServiceRoleSid?: string;
    /**
     * The conversation-level role assigned to a conversation creator user when they join a new conversation. See the [Conversation Role](https://www.twilio.com/docs/conversations/api/role-resource) for more info about roles.
     */
    defaultConversationCreatorRoleSid?: string;
    /**
     * The conversation-level role assigned to users when they are added to a conversation. See the [Conversation Role](https://www.twilio.com/docs/conversations/api/role-resource) for more info about roles.
     */
    defaultConversationRoleSid?: string;
    /**
     * Contains an absolute API resource URL to access the push notifications configuration of this service.
     */
    links?: Record<string, any>;
    /**
     * Whether the [Reachability Indicator](https://www.twilio.com/docs/chat/reachability-indicator) is enabled for this Conversations Service. The default is `false`.
     */
    reachabilityEnabled?: boolean;
    /**
     * An absolute API resource URL for this service configuration.
     */
    url?: string;
}
