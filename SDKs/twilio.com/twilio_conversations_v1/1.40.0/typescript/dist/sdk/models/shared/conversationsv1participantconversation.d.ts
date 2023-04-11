import { SpeakeasyBase } from "../../../internal/utils";
import { ParticipantConversationEnumStateEnum } from "./participantconversationenumstateenum";
export declare class ConversationsV1ParticipantConversation extends SpeakeasyBase {
    /**
     * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this conversation.
     */
    accountSid?: string;
    /**
     * The unique ID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) this conversation belongs to.
     */
    chatServiceSid?: string;
    /**
     * An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set "{}" will be returned.
     */
    conversationAttributes?: string;
    /**
     * Identity of the creator of this Conversation.
     */
    conversationCreatedBy?: string;
    /**
     * The date that this conversation was created, given in ISO 8601 format.
     */
    conversationDateCreated?: Date;
    /**
     * The date that this conversation was last updated, given in ISO 8601 format.
     */
    conversationDateUpdated?: Date;
    /**
     * The human-readable name of this conversation, limited to 256 characters. Optional.
     */
    conversationFriendlyName?: string;
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) this Participant belongs to.
     */
    conversationSid?: string;
    conversationState?: ParticipantConversationEnumStateEnum;
    /**
     * Timer date values representing state update for this conversation.
     */
    conversationTimers?: any;
    /**
     * An application-defined string that uniquely identifies the Conversation resource.
     */
    conversationUniqueName?: string;
    /**
     * Contains absolute URLs to access the [participant](https://www.twilio.com/docs/conversations/api/conversation-participant-resource) and [conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) of this conversation.
     */
    links?: Record<string, any>;
    /**
     * A unique string identifier for the conversation participant as [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is non-null if (and only if) the participant is using the Conversations SDK to communicate. Limited to 256 characters.
     */
    participantIdentity?: string;
    /**
     * Information about how this participant exchanges messages with the conversation. A JSON parameter consisting of type and address fields of the participant.
     */
    participantMessagingBinding?: any;
    /**
     * The unique ID of the [Participant](https://www.twilio.com/docs/conversations/api/conversation-participant-resource).
     */
    participantSid?: string;
    /**
     * The unique string that identifies the conversation participant as [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource).
     */
    participantUserSid?: string;
}
