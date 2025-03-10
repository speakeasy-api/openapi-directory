/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The range of the population values.
 */
export class Range extends SpeakeasyBase {
  /**
   * The maximum of the population values.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "max" })
  max?: number;

  /**
   * The minimum of the population values.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "min" })
  min?: number;
}
