import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Video cropping configuration for the input video. The cropped input video is scaled to match the output resolution.
 */
export declare class Crop extends SpeakeasyBase {
    /**
     * The number of pixels to crop from the bottom. The default is 0.
     */
    bottomPixels?: number;
    /**
     * The number of pixels to crop from the left. The default is 0.
     */
    leftPixels?: number;
    /**
     * The number of pixels to crop from the right. The default is 0.
     */
    rightPixels?: number;
    /**
     * The number of pixels to crop from the top. The default is 0.
     */
    topPixels?: number;
}
