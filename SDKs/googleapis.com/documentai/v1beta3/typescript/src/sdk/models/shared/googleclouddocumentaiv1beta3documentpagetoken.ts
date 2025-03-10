/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage } from "./googleclouddocumentaiv1beta3documentpagedetectedlanguage";
import { GoogleCloudDocumentaiV1beta3DocumentPageLayout } from "./googleclouddocumentaiv1beta3documentpagelayout";
import { GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak } from "./googleclouddocumentaiv1beta3documentpagetokendetectedbreak";
import { GoogleCloudDocumentaiV1beta3DocumentProvenance } from "./googleclouddocumentaiv1beta3documentprovenance";
import { Expose, Type } from "class-transformer";

/**
 * A detected token.
 */
export class GoogleCloudDocumentaiV1beta3DocumentPageToken extends SpeakeasyBase {
  /**
   * Detected break at the end of a Token.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "detectedBreak" })
  @Type(() => GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak)
  detectedBreak?: GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak;

  /**
   * A list of detected languages together with confidence.
   */
  @SpeakeasyMetadata({
    elemType: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage,
  })
  @Expose({ name: "detectedLanguages" })
  @Type(() => GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage)
  detectedLanguages?: GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage[];

  /**
   * Visual element describing a layout unit on a page.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "layout" })
  @Type(() => GoogleCloudDocumentaiV1beta3DocumentPageLayout)
  layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;

  /**
   * Structure to identify provenance relationships between annotations in different revisions.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "provenance" })
  @Type(() => GoogleCloudDocumentaiV1beta3DocumentProvenance)
  provenance?: GoogleCloudDocumentaiV1beta3DocumentProvenance;
}
