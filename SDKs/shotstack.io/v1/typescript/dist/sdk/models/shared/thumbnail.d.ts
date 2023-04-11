import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Generate a thumbnail image for the video or image at a specific point from the timeline.
 */
export declare class Thumbnail extends SpeakeasyBase {
    /**
     * The point on the timeline in seconds to capture a single frame to use as the thumbnail image.
     */
    capture: number;
    /**
     * Scale the thumbnail size to a fraction of the viewport size - i.e. setting the scale to 0.5 will scale  the thumbnail to half the size of the viewport.
     */
    scale: number;
}
