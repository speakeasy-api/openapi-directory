import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The reason why the video data is not available.
 */
export declare enum YoutubeVideoDetailsUnavailableReasonEnum {
    VideoUnavailableReasonUnspecified = "VIDEO_UNAVAILABLE_REASON_UNSPECIFIED",
    VideoUnavailableReasonPrivate = "VIDEO_UNAVAILABLE_REASON_PRIVATE",
    VideoUnavailableReasonDeleted = "VIDEO_UNAVAILABLE_REASON_DELETED"
}
/**
 * Details of a YouTube video.
 */
export declare class YoutubeVideoDetails extends SpeakeasyBase {
    /**
     * The YouTube video ID which can be searched on YouTube webpage.
     */
    id?: string;
    /**
     * The reason why the video data is not available.
     */
    unavailableReason?: YoutubeVideoDetailsUnavailableReasonEnum;
}
