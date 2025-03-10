/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * IdentityServiceConfig is configuration for Identity Service which allows customers to use external identity providers with the K8S API
 */
export class IdentityServiceConfig extends SpeakeasyBase {
  /**
   * Whether to enable the Identity Service component
   */
  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled?: boolean;
}
