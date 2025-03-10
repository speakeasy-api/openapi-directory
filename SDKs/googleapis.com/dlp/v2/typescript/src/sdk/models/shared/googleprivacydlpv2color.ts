/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Represents a color in the RGB color space.
 */
export class GooglePrivacyDlpV2Color extends SpeakeasyBase {
  /**
   * The amount of blue in the color as a value in the interval [0, 1].
   */
  @SpeakeasyMetadata()
  @Expose({ name: "blue" })
  blue?: number;

  /**
   * The amount of green in the color as a value in the interval [0, 1].
   */
  @SpeakeasyMetadata()
  @Expose({ name: "green" })
  green?: number;

  /**
   * The amount of red in the color as a value in the interval [0, 1].
   */
  @SpeakeasyMetadata()
  @Expose({ name: "red" })
  red?: number;
}
