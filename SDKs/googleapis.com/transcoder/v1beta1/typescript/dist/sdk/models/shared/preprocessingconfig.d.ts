import { SpeakeasyBase } from "../../../internal/utils";
import { Audio } from "./audio";
import { Color } from "./color";
import { Crop } from "./crop";
import { Deblock } from "./deblock";
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
     * Color preprocessing configuration.
     */
    color?: Color;
    /**
     * Video cropping configuration for the input video. The cropped input video is scaled to match the output resolution.
     */
    crop?: Crop;
    /**
     * Deblock preprocessing configuration.
     */
    deblock?: Deblock;
    /**
     * Denoise preprocessing configuration.
     */
    denoise?: Denoise;
    /**
     * Pad filter configuration for the input video. The padded input video is scaled after padding with black to match the output resolution.
     */
    pad?: Pad;
}
