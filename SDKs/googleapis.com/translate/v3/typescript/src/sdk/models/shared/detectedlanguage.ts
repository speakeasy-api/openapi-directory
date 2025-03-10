/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The response message for language detection.
 */
export class DetectedLanguage extends SpeakeasyBase {
  /**
   * The confidence of the detection result for this language.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "confidence" })
  confidence?: number;

  /**
   * The ISO-639 language code of the source content in the request, detected automatically.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "languageCode" })
  languageCode?: string;
}
