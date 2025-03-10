/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class NetworkUnblock extends SpeakeasyBase {
  /**
   * The Network code
   */
  @SpeakeasyMetadata()
  @Expose({ name: "network" })
  network?: string;

  /**
   * An optional duration the unblock will be applied for in seconds
   */
  @SpeakeasyMetadata()
  @Expose({ name: "unblock_duration" })
  unblockDuration?: number;
}
