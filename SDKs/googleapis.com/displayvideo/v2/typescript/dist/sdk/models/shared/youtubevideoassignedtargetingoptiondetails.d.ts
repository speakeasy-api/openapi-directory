import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for YouTube video assigned targeting option. This will be populated in the youtube_video_details field when targeting_type is `TARGETING_TYPE_YOUTUBE_VIDEO`.
 */
export declare class YoutubeVideoAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Indicates if this option is being negatively targeted.
     */
    negative?: boolean;
    /**
     * YouTube video id as it appears on the YouTube watch page.
     */
    videoId?: string;
}
