/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * key parameters
 */
export class APIKeyOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "comment" })
  comment?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "organization_id" })
  organizationId?: string;
}
