import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Statistics about a channel: number of subscribers, number of videos in the channel, etc.
 */
export declare class ChannelStatistics extends SpeakeasyBase {
    /**
     * The number of comments for the channel.
     */
    commentCount?: string;
    /**
     * Whether or not the number of subscribers is shown for this user.
     */
    hiddenSubscriberCount?: boolean;
    /**
     * The number of subscribers that the channel has.
     */
    subscriberCount?: string;
    /**
     * The number of videos uploaded to the channel.
     */
    videoCount?: string;
    /**
     * The number of times the channel has been viewed.
     */
    viewCount?: string;
}
