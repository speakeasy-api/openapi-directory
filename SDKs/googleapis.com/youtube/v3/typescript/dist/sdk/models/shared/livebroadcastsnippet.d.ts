import { SpeakeasyBase } from "../../../internal/utils";
import { ThumbnailDetails } from "./thumbnaildetails";
/**
 * Basic broadcast information.
 */
export declare class LiveBroadcastSnippet extends SpeakeasyBase {
    /**
     * The date and time that the broadcast actually ended. This information is only available once the broadcast's state is complete.
     */
    actualEndTime?: Date;
    /**
     * The date and time that the broadcast actually started. This information is only available once the broadcast's state is live.
     */
    actualStartTime?: Date;
    /**
     * The ID that YouTube uses to uniquely identify the channel that is publishing the broadcast.
     */
    channelId?: string;
    /**
     * The broadcast's description. As with the title, you can set this field by modifying the broadcast resource or by setting the description field of the corresponding video resource.
     */
    description?: string;
    /**
     * Indicates whether this broadcast is the default broadcast. Internal only.
     */
    isDefaultBroadcast?: boolean;
    /**
     * The id of the live chat for this broadcast.
     */
    liveChatId?: string;
    /**
     * The date and time that the broadcast was added to YouTube's live broadcast schedule.
     */
    publishedAt?: Date;
    /**
     * The date and time that the broadcast is scheduled to end.
     */
    scheduledEndTime?: Date;
    /**
     * The date and time that the broadcast is scheduled to start.
     */
    scheduledStartTime?: Date;
    /**
     * Internal representation of thumbnails for a YouTube resource.
     */
    thumbnails?: ThumbnailDetails;
    /**
     * The broadcast's title. Note that the broadcast represents exactly one YouTube video. You can set this field by modifying the broadcast resource or by setting the title field of the corresponding video resource.
     */
    title?: string;
}
