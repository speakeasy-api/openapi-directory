import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Rating of a video.
 */
export declare enum VideoRatingRatingEnum {
    None = "none",
    Like = "like",
    Dislike = "dislike"
}
/**
 * Basic details about rating of a video.
 */
export declare class VideoRating extends SpeakeasyBase {
    /**
     * Rating of a video.
     */
    rating?: VideoRatingRatingEnum;
    /**
     * The ID that YouTube uses to uniquely identify the video.
     */
    videoId?: string;
}
