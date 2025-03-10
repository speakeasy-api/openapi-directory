/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Wrapper for Cloud Function attributes.
 */
export class CloudFunctionEndpoint extends SpeakeasyBase {
  /**
   * A [Cloud Function](https://cloud.google.com/functions) name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "uri" })
  uri?: string;
}
