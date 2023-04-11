import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceUserConversationEnumNotificationLevelEnum } from "./serviceuserconversationenumnotificationlevelenum";
import { ServiceUserConversationEnumStateEnum } from "./serviceuserconversationenumstateenum";
/**
 * OK
 */
export declare class ConversationsV1ServiceServiceUserServiceUserConversation extends SpeakeasyBase {
    /**
     * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this conversation.
     */
    accountSid?: string;
    /**
     * An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set "{}" will be returned.
     */
    attributes?: string;
    /**
     * The unique ID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) this conversation belongs to.
     */
    chatServiceSid?: string;
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this User Conversation.
     */
    conversationSid?: string;
    conversationState?: ServiceUserConversationEnumStateEnum;
    /**
     * Identity of the creator of this Conversation.
     */
    createdBy?: string;
    /**
     * The date that this conversation was created, given in ISO 8601 format.
     */
    dateCreated?: Date;
    /**
     * The date that this conversation was last updated, given in ISO 8601 format.
     */
    dateUpdated?: Date;
    /**
     * The human-readable name of this conversation, limited to 256 characters. Optional.
     */
    friendlyName?: string;
    /**
     * The index of the last Message in the Conversation that the Participant has read.
     */
    lastReadMessageIndex?: number;
    /**
     * Contains absolute URLs to access the [participant](https://www.twilio.com/docs/conversations/api/conversation-participant-resource) and [conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) of this conversation.
     */
    links?: Record<string, any>;
    notificationLevel?: ServiceUserConversationEnumNotificationLevelEnum;
    /**
     * The unique ID of the [participant](https://www.twilio.com/docs/conversations/api/conversation-participant-resource) the user conversation belongs to.
     */
    participantSid?: string;
    /**
     * Timer date values representing state update for this conversation.
     */
    timers?: any;
    /**
     * An application-defined string that uniquely identifies the Conversation resource. It can be used to address the resource in place of the resource's `conversation_sid` in the URL.
     */
    uniqueName?: string;
    /**
     * The number of unread Messages in the Conversation for the Participant.
     */
    unreadMessagesCount?: number;
    url?: string;
    /**
     * The unique string that identifies the [User resource](https://www.twilio.com/docs/conversations/api/user-resource).
     */
    userSid?: string;
}
