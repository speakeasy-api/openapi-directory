/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The result of inserting an inline image.
 */
export class InsertInlineImageResponse extends SpeakeasyBase {
  /**
   * The ID of the created InlineObject.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "objectId" })
  objectId?: string;
}
