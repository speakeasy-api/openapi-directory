/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc.
 */
export class ViolatingResource extends SpeakeasyBase {
  /**
   * The MIME type of this resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contentType" })
  contentType?: string;

  /**
   * URL of this violating resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resourceUrl" })
  resourceUrl?: string;
}
