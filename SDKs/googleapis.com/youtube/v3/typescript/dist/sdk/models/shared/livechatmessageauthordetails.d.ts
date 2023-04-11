import { SpeakeasyBase } from "../../../internal/utils";
export declare class LiveChatMessageAuthorDetails extends SpeakeasyBase {
    /**
     * The YouTube channel ID.
     */
    channelId?: string;
    /**
     * The channel's URL.
     */
    channelUrl?: string;
    /**
     * The channel's display name.
     */
    displayName?: string;
    /**
     * Whether the author is a moderator of the live chat.
     */
    isChatModerator?: boolean;
    /**
     * Whether the author is the owner of the live chat.
     */
    isChatOwner?: boolean;
    /**
     * Whether the author is a sponsor of the live chat.
     */
    isChatSponsor?: boolean;
    /**
     * Whether the author's identity has been verified by YouTube.
     */
    isVerified?: boolean;
    /**
     * The channels's avatar URL.
     */
    profileImageUrl?: string;
}
