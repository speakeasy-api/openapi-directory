import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for YouTube channel assigned targeting option. This will be populated in the youtube_channel_details field when targeting_type is `TARGETING_TYPE_YOUTUBE_CHANNEL`.
 */
export declare class YoutubeChannelAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * The YouTube uploader channel id or the channel code of a YouTube channel.
     */
    channelId?: string;
    /**
     * Indicates if this option is being negatively targeted.
     */
    negative?: boolean;
}
