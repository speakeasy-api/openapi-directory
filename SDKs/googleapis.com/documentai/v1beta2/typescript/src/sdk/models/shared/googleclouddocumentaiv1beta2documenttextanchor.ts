/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment } from "./googleclouddocumentaiv1beta2documenttextanchortextsegment";
import { Expose, Type } from "class-transformer";

/**
 * Text reference indexing into the Document.text.
 */
export class GoogleCloudDocumentaiV1beta2DocumentTextAnchor extends SpeakeasyBase {
  /**
   * Contains the content of the text span so that users do not have to look it up in the text_segments. It is always populated for formFields.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: string;

  /**
   * The text segments from the Document.text.
   */
  @SpeakeasyMetadata({
    elemType: GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment,
  })
  @Expose({ name: "textSegments" })
  @Type(() => GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment)
  textSegments?: GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment[];
}
