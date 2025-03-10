/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class LicenseCodeLicenseAlias extends SpeakeasyBase {
  /**
   * [Output Only] Description of this License Code.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * [Output Only] URL of license corresponding to this License Code.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "selfLink" })
  selfLink?: string;
}
