import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ConversationsV1ConversationConversationParticipant extends SpeakeasyBase {
    /**
     * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this participant.
     */
    accountSid?: string;
    /**
     * An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set "{}" will be returned.
     */
    attributes?: string;
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this participant.
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
     * A unique string identifier for the conversation participant as [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is non-null if (and only if) the participant is using the Conversations SDK to communicate. Limited to 256 characters.
     */
    identity?: string;
    /**
     * Index of last “read” message in the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for the Participant.
     */
    lastReadMessageIndex?: number;
    /**
     * Timestamp of last “read” message in the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for the Participant.
     */
    lastReadTimestamp?: string;
    /**
     * Information about how this participant exchanges messages with the conversation. A JSON parameter consisting of type and address fields of the participant.
     */
    messagingBinding?: any;
    /**
     * The SID of a conversation-level [Role](https://www.twilio.com/docs/conversations/api/role-resource) to assign to the participant.
     */
    roleSid?: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string;
    /**
     * An absolute API resource URL for this participant.
     */
    url?: string;
}
