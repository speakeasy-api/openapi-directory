/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Represents a CIDR range which can be used to assign addresses.
 */
export class PublicAdvertisedPrefixPublicDelegatedPrefix extends SpeakeasyBase {
  /**
   * The IP address range of the public delegated prefix
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ipRange" })
  ipRange?: string;

  /**
   * The name of the public delegated prefix
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * The project number of the public delegated prefix
   */
  @SpeakeasyMetadata()
  @Expose({ name: "project" })
  project?: string;

  /**
   * The region of the public delegated prefix if it is regional. If absent, the prefix is global.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "region" })
  region?: string;

  /**
   * The status of the public delegated prefix. Possible values are: INITIALIZING: The public delegated prefix is being initialized and addresses cannot be created yet. ANNOUNCED: The public delegated prefix is active.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;
}
