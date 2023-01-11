import { SpeakeasyBase } from "../../../internal/utils";
import { ParticipantConversationEnumStateEnum } from "./participantconversationenumstateenum";
export declare class ConversationsV1ParticipantConversation extends SpeakeasyBase {
    accountSid?: string;
    chatServiceSid?: string;
    conversationAttributes?: string;
    conversationCreatedBy?: string;
    conversationDateCreated?: Date;
    conversationDateUpdated?: Date;
    conversationFriendlyName?: string;
    conversationSid?: string;
    conversationState?: ParticipantConversationEnumStateEnum;
    conversationTimers?: any;
    conversationUniqueName?: string;
    links?: Record<string, any>;
    participantIdentity?: string;
    participantMessagingBinding?: any;
    participantSid?: string;
    participantUserSid?: string;
}
