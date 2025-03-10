/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Represents starting and ending value of a range in double.
 */
export class BucketRange extends SpeakeasyBase {
  /**
   * Starting value of the bucket range.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "from" })
  from?: number;

  /**
   * Ending value of the bucket range.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "to" })
  to?: number;
}
