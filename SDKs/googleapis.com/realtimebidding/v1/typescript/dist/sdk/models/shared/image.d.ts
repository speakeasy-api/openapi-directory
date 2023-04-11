import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved.
 */
export declare class Image extends SpeakeasyBase {
    /**
     * Image height in pixels.
     */
    height?: number;
    /**
     * The URL of the image.
     */
    url?: string;
    /**
     * Image width in pixels.
     */
    width?: number;
}
