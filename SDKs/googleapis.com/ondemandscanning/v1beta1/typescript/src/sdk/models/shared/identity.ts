/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The unique identifier of the update.
 */
export class Identity extends SpeakeasyBase {
  /**
   * The revision number of the update.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "revision" })
  revision?: number;

  /**
   * The revision independent identifier of the update.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updateId" })
  updateId?: string;
}
