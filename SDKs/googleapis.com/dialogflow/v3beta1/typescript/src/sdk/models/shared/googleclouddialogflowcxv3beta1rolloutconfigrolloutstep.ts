/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * A single rollout step with specified traffic allocation.
 */
export class GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep extends SpeakeasyBase {
  /**
   * The name of the rollout step;
   */
  @SpeakeasyMetadata()
  @Expose({ name: "displayName" })
  displayName?: string;

  /**
   * The minimum time that this step should last. Should be longer than 1 hour. If not set, the default minimum duration for each step will be 1 hour.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "minDuration" })
  minDuration?: string;

  /**
   * The percentage of traffic allocated to the flow version of this rollout step. (0%, 100%].
   */
  @SpeakeasyMetadata()
  @Expose({ name: "trafficPercent" })
  trafficPercent?: number;
}
