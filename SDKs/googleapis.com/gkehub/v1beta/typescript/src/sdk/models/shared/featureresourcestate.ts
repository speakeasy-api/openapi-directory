/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The current state of the Feature resource in the Hub API.
 */
export enum FeatureResourceStateStateEnum {
  StateUnspecified = "STATE_UNSPECIFIED",
  Enabling = "ENABLING",
  Active = "ACTIVE",
  Disabling = "DISABLING",
  Updating = "UPDATING",
  ServiceUpdating = "SERVICE_UPDATING",
}

/**
 * FeatureResourceState describes the state of a Feature *resource* in the GkeHub API. See `FeatureState` for the "running state" of the Feature in the Hub and across Memberships.
 */
export class FeatureResourceState extends SpeakeasyBase {
  /**
   * The current state of the Feature resource in the Hub API.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: FeatureResourceStateStateEnum;
}
