/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Document } from "./document";
import { Expose, Type } from "class-transformer";

/**
 * The encoding type used by the API to calculate offsets.
 */
export enum AnalyzeEntitySentimentRequestEncodingTypeEnum {
  None = "NONE",
  Utf8 = "UTF8",
  Utf16 = "UTF16",
  Utf32 = "UTF32",
}

/**
 * The entity-level sentiment analysis request message.
 */
export class AnalyzeEntitySentimentRequest extends SpeakeasyBase {
  /**
   * Represents the input to API methods.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "document" })
  @Type(() => Document)
  document?: Document;

  /**
   * The encoding type used by the API to calculate offsets.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "encodingType" })
  encodingType?: AnalyzeEntitySentimentRequestEncodingTypeEnum;
}
