/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class AttachmentDataRef extends SpeakeasyBase {
  /**
   * The resource name of the attachment data. This is used with the media API to download the attachment data.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resourceName" })
  resourceName?: string;
}
