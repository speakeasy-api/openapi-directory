/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Money } from "./money";
import { Expose, Type } from "class-transformer";

/**
 * Configuration for a base plan specific to a region.
 */
export class RegionalBasePlanConfig extends SpeakeasyBase {
  /**
   * Whether the base plan in the specified region is available for new subscribers. Existing subscribers will not have their subscription canceled if this value is set to false. If not specified, this will default to false.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "newSubscriberAvailability" })
  newSubscriberAvailability?: boolean;

  /**
   * Represents an amount of money with its currency type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "price" })
  @Type(() => Money)
  price?: Money;

  /**
   * Required. Region code this configuration applies to, as defined by ISO 3166-2, e.g. "US".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "regionCode" })
  regionCode?: string;
}
