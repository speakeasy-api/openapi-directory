/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * GcfsConfig contains configurations of Google Container File System (image streaming).
 */
export class GcfsConfig extends SpeakeasyBase {
  /**
   * Whether to use GCFS.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled?: boolean;
}
