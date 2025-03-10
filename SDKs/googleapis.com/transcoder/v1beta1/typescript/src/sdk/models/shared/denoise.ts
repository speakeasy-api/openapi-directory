/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Denoise preprocessing configuration.
 */
export class Denoise extends SpeakeasyBase {
  /**
   * Set strength of the denoise. Enter a value between 0 and 1. The higher the value, the smoother the image. 0 is no denoising. The default is 0.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "strength" })
  strength?: number;

  /**
   * Set the denoiser mode. The default is `"standard"`. Supported denoiser modes: - 'standard' - 'grain'
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tune" })
  tune?: string;
}
