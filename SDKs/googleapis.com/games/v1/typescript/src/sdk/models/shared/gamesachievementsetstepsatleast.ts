/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The payload to request to increment an achievement.
 */
export class GamesAchievementSetStepsAtLeast extends SpeakeasyBase {
  /**
   * Uniquely identifies the type of this resource. Value is always the fixed string `games#GamesAchievementSetStepsAtLeast`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "kind" })
  kind?: string;

  /**
   * The minimum number of steps for the achievement to be set to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "steps" })
  steps?: number;
}
