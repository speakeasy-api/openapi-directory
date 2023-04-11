import { SpeakeasyBase } from "../../../internal/utils";
import { Video } from "./video";
/**
 * An item containing a video.
 */
export declare class VideoItem extends SpeakeasyBase {
    /**
     * The text displayed below the video.
     */
    caption?: string;
    /**
     * Data representing a video.
     */
    video?: Video;
}
