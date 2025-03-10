/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaFieldListOptions } from "./googleappsdrivelabelsv2betafieldlistoptions";
import { Expose, Type } from "class-transformer";

/**
 * Options for the user field type.
 */
export class GoogleAppsDriveLabelsV2betaFieldUserOptions extends SpeakeasyBase {
  /**
   * Options for a multi-valued variant of an associated field type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "listOptions" })
  @Type(() => GoogleAppsDriveLabelsV2betaFieldListOptions)
  listOptions?: GoogleAppsDriveLabelsV2betaFieldListOptions;
}
