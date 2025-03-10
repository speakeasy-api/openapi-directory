/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Response message for `TestPermissions` method.
 */
export class SasPortalTestPermissionsResponse extends SpeakeasyBase {
  /**
   * A set of permissions that the caller is allowed.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "permissions" })
  permissions?: string[];
}
