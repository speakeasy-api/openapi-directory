/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Required. The version of SDF being used.
 */
export enum SdfConfigVersionEnum {
  SdfVersionUnspecified = "SDF_VERSION_UNSPECIFIED",
  SdfVersion31 = "SDF_VERSION_3_1",
  SdfVersion4 = "SDF_VERSION_4",
  SdfVersion41 = "SDF_VERSION_4_1",
  SdfVersion42 = "SDF_VERSION_4_2",
  SdfVersion5 = "SDF_VERSION_5",
  SdfVersion51 = "SDF_VERSION_5_1",
  SdfVersion52 = "SDF_VERSION_5_2",
  SdfVersion53 = "SDF_VERSION_5_3",
  SdfVersion54 = "SDF_VERSION_5_4",
  SdfVersion55 = "SDF_VERSION_5_5",
}

/**
 * Structured Data File (SDF) related settings.
 */
export class SdfConfig extends SpeakeasyBase {
  /**
   * An administrator email address to which the SDF processing status reports will be sent.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "adminEmail" })
  adminEmail?: string;

  /**
   * Required. The version of SDF being used.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: SdfConfigVersionEnum;
}
