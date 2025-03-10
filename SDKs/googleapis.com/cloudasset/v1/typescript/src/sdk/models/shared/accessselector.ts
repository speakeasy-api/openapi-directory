/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Specifies roles and/or permissions to analyze, to determine both the identities possessing them and the resources they control. If multiple values are specified, results will include roles or permissions matching any of them. The total number of roles and permissions should be equal or less than 10.
 */
export class AccessSelector extends SpeakeasyBase {
  /**
   * Optional. The permissions to appear in result.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "permissions" })
  permissions?: string[];

  /**
   * Optional. The roles to appear in result.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "roles" })
  roles?: string[];
}
