import { SpeakeasyBase } from "../../../internal/utils";
import { Audio } from "./audio";
import { Color } from "./color";
import { Crop } from "./crop";
import { Deblock } from "./deblock";
import { Deinterlace } from "./deinterlace";
import { Denoise } from "./denoise";
import { Pad } from "./pad";
/**
 * Preprocessing configurations.
 */
export declare class PreprocessingConfig extends SpeakeasyBase {
    /**
     * Audio preprocessing configuration.
     */
    audio?: Audio;
    /**
     * Color preprocessing configuration. **Note:** This configuration is not supported.
     */
    color?: Color;
    /**
     * Video cropping configuration for the input video. The cropped input video is scaled to match the output resolution.
     */
    crop?: Crop;
    /**
     * Deblock preprocessing configuration. **Note:** This configuration is not supported.
     */
    deblock?: Deblock;
    /**
     * Deinterlace configuration for input video.
     */
    deinterlace?: Deinterlace;
    /**
     * Denoise preprocessing configuration. **Note:** This configuration is not supported.
     */
    denoise?: Denoise;
    /**
     * Pad filter configuration for the input video. The padded input video is scaled after padding with black to match the output resolution.
     */
    pad?: Pad;
}
