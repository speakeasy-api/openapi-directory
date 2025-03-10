/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GuestUnitFeatures } from "./guestunitfeatures";
import { Expose, Type } from "class-transformer";

/**
 * A specific type of unit primarily defined by its features.
 */
export class GuestUnitType extends SpeakeasyBase {
  /**
   * Required. Unit or room code identifiers for a single GuestUnitType. Each code must be unique within a Lodging instance.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "codes" })
  codes?: string[];

  /**
   * Features and available amenities in the guest unit.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "features" })
  @Type(() => GuestUnitFeatures)
  features?: GuestUnitFeatures;

  /**
   * Required. Short, English label or name of the GuestUnitType. Target <50 chars.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "label" })
  label?: string;
}
