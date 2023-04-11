import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Statistics about the video, such as the number of times the video was viewed or liked.
 */
export declare class VideoStatistics extends SpeakeasyBase {
    /**
     * The number of comments for the video.
     */
    commentCount?: string;
    /**
     * The number of users who have indicated that they disliked the video by giving it a negative rating.
     */
    dislikeCount?: string;
    /**
     * The number of users who currently have the video marked as a favorite video.
     */
    favoriteCount?: string;
    /**
     * The number of users who have indicated that they liked the video by giving it a positive rating.
     */
    likeCount?: string;
    /**
     * The number of times the video has been viewed.
     */
    viewCount?: string;
}
