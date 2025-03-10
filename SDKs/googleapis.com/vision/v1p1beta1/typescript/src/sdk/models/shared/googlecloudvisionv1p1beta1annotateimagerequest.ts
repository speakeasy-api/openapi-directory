/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1Feature } from "./googlecloudvisionv1p1beta1feature";
import { GoogleCloudVisionV1p1beta1Image } from "./googlecloudvisionv1p1beta1image";
import { GoogleCloudVisionV1p1beta1ImageContext } from "./googlecloudvisionv1p1beta1imagecontext";
import { Expose, Type } from "class-transformer";

/**
 * Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.
 */
export class GoogleCloudVisionV1p1beta1AnnotateImageRequest extends SpeakeasyBase {
  /**
   * Requested features.
   */
  @SpeakeasyMetadata({ elemType: GoogleCloudVisionV1p1beta1Feature })
  @Expose({ name: "features" })
  @Type(() => GoogleCloudVisionV1p1beta1Feature)
  features?: GoogleCloudVisionV1p1beta1Feature[];

  /**
   * Client image to perform Google Cloud Vision API tasks over.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "image" })
  @Type(() => GoogleCloudVisionV1p1beta1Image)
  image?: GoogleCloudVisionV1p1beta1Image;

  /**
   * Image context and/or feature-specific parameters.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "imageContext" })
  @Type(() => GoogleCloudVisionV1p1beta1ImageContext)
  imageContext?: GoogleCloudVisionV1p1beta1ImageContext;
}
