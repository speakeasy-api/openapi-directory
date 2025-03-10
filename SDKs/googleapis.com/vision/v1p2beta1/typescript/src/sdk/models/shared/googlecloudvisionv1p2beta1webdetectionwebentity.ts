/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Entity deduced from similar images on the Internet.
 */
export class GoogleCloudVisionV1p2beta1WebDetectionWebEntity extends SpeakeasyBase {
  /**
   * Canonical description of the entity, in English.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * Opaque entity ID.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "entityId" })
  entityId?: string;

  /**
   * Overall relevancy score for the entity. Not normalized and not comparable across different image queries.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "score" })
  score?: number;
}
