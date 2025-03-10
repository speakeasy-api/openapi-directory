/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1Block } from "./googlecloudvisionv1p1beta1block";
import { GoogleCloudVisionV1p1beta1TextAnnotationTextProperty } from "./googlecloudvisionv1p1beta1textannotationtextproperty";
import { Expose, Type } from "class-transformer";

/**
 * Detected page from OCR.
 */
export class GoogleCloudVisionV1p1beta1Page extends SpeakeasyBase {
  /**
   * List of blocks of text, images etc on this page.
   */
  @SpeakeasyMetadata({ elemType: GoogleCloudVisionV1p1beta1Block })
  @Expose({ name: "blocks" })
  @Type(() => GoogleCloudVisionV1p1beta1Block)
  blocks?: GoogleCloudVisionV1p1beta1Block[];

  /**
   * Confidence of the OCR results on the page. Range [0, 1].
   */
  @SpeakeasyMetadata()
  @Expose({ name: "confidence" })
  confidence?: number;

  /**
   * Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "height" })
  height?: number;

  /**
   * Additional information detected on the structural component.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "property" })
  @Type(() => GoogleCloudVisionV1p1beta1TextAnnotationTextProperty)
  property?: GoogleCloudVisionV1p1beta1TextAnnotationTextProperty;

  /**
   * Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "width" })
  width?: number;
}
