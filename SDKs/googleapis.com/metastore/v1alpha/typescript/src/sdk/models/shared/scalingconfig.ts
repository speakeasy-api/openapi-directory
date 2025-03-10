/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * An enum of readable instance sizes, with each instance size mapping to a float value (e.g. InstanceSize.EXTRA_SMALL = scaling_factor(0.1))
 */
export enum ScalingConfigInstanceSizeEnum {
  InstanceSizeUnspecified = "INSTANCE_SIZE_UNSPECIFIED",
  ExtraSmall = "EXTRA_SMALL",
  Small = "SMALL",
  Medium = "MEDIUM",
  Large = "LARGE",
  ExtraLarge = "EXTRA_LARGE",
}

/**
 * Represents the scaling configuration of a metastore service.
 */
export class ScalingConfig extends SpeakeasyBase {
  /**
   * An enum of readable instance sizes, with each instance size mapping to a float value (e.g. InstanceSize.EXTRA_SMALL = scaling_factor(0.1))
   */
  @SpeakeasyMetadata()
  @Expose({ name: "instanceSize" })
  instanceSize?: ScalingConfigInstanceSizeEnum;

  /**
   * Scaling factor, increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "scalingFactor" })
  scalingFactor?: number;
}
