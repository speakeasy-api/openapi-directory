/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The Cloud Storage location for the input content
 */
export class GcsSource extends SpeakeasyBase {
  /**
   * Required. Source data URI. (e.g. 'gs://my_bucket/my_object').
   */
  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri?: string;
}
