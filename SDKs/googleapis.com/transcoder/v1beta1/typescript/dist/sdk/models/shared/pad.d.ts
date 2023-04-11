import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Pad filter configuration for the input video. The padded input video is scaled after padding with black to match the output resolution.
 */
export declare class Pad extends SpeakeasyBase {
    /**
     * The number of pixels to add to the bottom. The default is 0.
     */
    bottomPixels?: number;
    /**
     * The number of pixels to add to the left. The default is 0.
     */
    leftPixels?: number;
    /**
     * The number of pixels to add to the right. The default is 0.
     */
    rightPixels?: number;
    /**
     * The number of pixels to add to the top. The default is 0.
     */
    topPixels?: number;
}
