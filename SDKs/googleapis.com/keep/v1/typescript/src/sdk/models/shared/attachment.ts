/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * An attachment to a note.
 */
export class Attachment extends SpeakeasyBase {
  /**
   * The MIME types (IANA media types) in which the attachment is available.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "mimeType" })
  mimeType?: string[];

  /**
   * The resource name;
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}
