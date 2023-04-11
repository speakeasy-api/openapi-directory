import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Generate a poster image for the video at a specific point from the timeline. The poster image size will match the size of the output video.
 */
export declare class Poster extends SpeakeasyBase {
    /**
     * The point on the timeline in seconds to capture a single frame to use as the poster image.
     */
    capture: number;
}
