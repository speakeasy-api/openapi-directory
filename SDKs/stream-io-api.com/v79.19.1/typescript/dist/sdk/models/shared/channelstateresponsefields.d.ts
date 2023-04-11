import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelMember } from "./channelmember";
import { PendingMessage } from "./pendingmessage";
import { Read } from "./read";
export declare class ChannelStateResponseFields extends SpeakeasyBase {
    /**
     * Represents channel in chat
     */
    channel?: Record<string, any>;
    /**
     * Whether this channel is hidden or not
     */
    hidden?: boolean;
    /**
     * Messages before this date are hidden from the user
     */
    hideMessagesBefore?: Date;
    /**
     * List of channel members
     */
    members: ChannelMember[];
    membership?: ChannelMember;
    /**
     * List of channel messages
     */
    messages: Record<string, any>[];
    /**
     * Pending messages that this user has sent
     */
    pendingMessages?: PendingMessage[];
    /**
     * List of pinned messages in the channel
     */
    pinnedMessages: Record<string, any>[];
    /**
     * List of read states
     */
    read?: Read[];
    /**
     * Number of channel watchers
     */
    watcherCount?: number;
    /**
     * List of user who is watching the channel
     */
    watchers?: Record<string, any>[];
}
