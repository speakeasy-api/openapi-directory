import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Color preprocessing configuration. **Note:** This configuration is not supported.
 */
export declare class Color extends SpeakeasyBase {
    /**
     * Control brightness of the video. Enter a value between -1 and 1, where -1 is minimum brightness and 1 is maximum brightness. 0 is no change. The default is 0.
     */
    brightness?: number;
    /**
     * Control black and white contrast of the video. Enter a value between -1 and 1, where -1 is minimum contrast and 1 is maximum contrast. 0 is no change. The default is 0.
     */
    contrast?: number;
    /**
     * Control color saturation of the video. Enter a value between -1 and 1, where -1 is fully desaturated and 1 is maximum saturation. 0 is no change. The default is 0.
     */
    saturation?: number;
}
