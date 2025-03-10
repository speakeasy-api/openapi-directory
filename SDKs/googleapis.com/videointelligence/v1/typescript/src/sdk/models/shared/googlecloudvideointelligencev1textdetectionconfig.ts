/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Config for TEXT_DETECTION.
 */
export class GoogleCloudVideointelligenceV1TextDetectionConfig extends SpeakeasyBase {
  /**
   * Language hint can be specified if the language to be detected is known a priori. It can increase the accuracy of the detection. Language hint must be language code in BCP-47 format. Automatic language detection is performed if no hint is provided.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "languageHints" })
  languageHints?: string[];

  /**
   * Model to use for text detection. Supported values: "builtin/stable" (the default if unset) and "builtin/latest".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "model" })
  model?: string;
}
