/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The registry provides unique creative identifiers.
 */
export enum UniversalAdIdRegistryEnum {
  UniversalAdRegistryUnspecified = "UNIVERSAL_AD_REGISTRY_UNSPECIFIED",
  UniversalAdRegistryOther = "UNIVERSAL_AD_REGISTRY_OTHER",
  UniversalAdRegistryAdId = "UNIVERSAL_AD_REGISTRY_AD_ID",
  UniversalAdRegistryClearcast = "UNIVERSAL_AD_REGISTRY_CLEARCAST",
  UniversalAdRegistryDv360 = "UNIVERSAL_AD_REGISTRY_DV360",
  UniversalAdRegistryCm = "UNIVERSAL_AD_REGISTRY_CM",
}

/**
 * A creative identifier provided by a registry that is unique across all platforms. This is part of the VAST 4.0 standard.
 */
export class UniversalAdId extends SpeakeasyBase {
  /**
   * The unique creative identifier.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * The registry provides unique creative identifiers.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "registry" })
  registry?: UniversalAdIdRegistryEnum;
}
