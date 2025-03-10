/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Start and end position in a sequence (e.g. text segment).
 */
export class GoogleCloudDatalabelingV1beta1SequentialSegment extends SpeakeasyBase {
  /**
   * End position (exclusive).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "end" })
  end?: number;

  /**
   * Start position (inclusive).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "start" })
  start?: number;
}
