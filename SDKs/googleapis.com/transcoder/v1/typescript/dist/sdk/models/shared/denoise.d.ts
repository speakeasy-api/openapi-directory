import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Denoise preprocessing configuration. **Note:** This configuration is not supported.
 */
export declare class Denoise extends SpeakeasyBase {
    /**
     * Set strength of the denoise. Enter a value between 0 and 1. The higher the value, the smoother the image. 0 is no denoising. The default is 0.
     */
    strength?: number;
    /**
     * Set the denoiser mode. The default is `standard`. Supported denoiser modes: - `standard` - `grain`
     */
    tune?: string;
}
