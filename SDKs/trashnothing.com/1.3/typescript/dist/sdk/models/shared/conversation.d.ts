import { SpeakeasyBase } from "../../../internal/utils";
import { Message } from "./message";
import { User } from "./user";
/**
 * A conversation between the current user and another user.
 */
export declare class Conversation extends SpeakeasyBase {
    /**
     * Whether or not this conversation is archived.
     */
    archived?: boolean;
    /**
     * Whether or not this conversation is blocked.
     */
    blocked?: boolean;
    conversationId?: string;
    /**
     * The UTC date and time of the last message in this conversation.
     */
    lastMessageDate?: Date;
    /**
     * The latest messages in this conversation.
     */
    messages?: Message[];
    /**
     * The count of how many unread messages this conversation has.
     */
    numUnreadMessages?: number;
    user?: User;
}
