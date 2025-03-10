/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Output only. The ad type to target. Only applicable to insertion order targeting and new line items supporting the specified ad type will inherit this targeting option by default. Possible values are: * `AD_TYPE_DISPLAY`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_DISPLAY_DEFAULT`. * `AD_TYPE_VIDEO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_VIDEO_DEFAULT`.
 */
export enum OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum {
  AdTypeUnspecified = "AD_TYPE_UNSPECIFIED",
  AdTypeDisplay = "AD_TYPE_DISPLAY",
  AdTypeVideo = "AD_TYPE_VIDEO",
  AdTypeAudio = "AD_TYPE_AUDIO",
}

/**
 * Output only. The on screen position.
 */
export enum OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum {
  OnScreenPositionUnspecified = "ON_SCREEN_POSITION_UNSPECIFIED",
  OnScreenPositionUnknown = "ON_SCREEN_POSITION_UNKNOWN",
  OnScreenPositionAboveTheFold = "ON_SCREEN_POSITION_ABOVE_THE_FOLD",
  OnScreenPositionBelowTheFold = "ON_SCREEN_POSITION_BELOW_THE_FOLD",
}

/**
 * On screen position targeting option details. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.
 */
export class OnScreenPositionAssignedTargetingOptionDetails extends SpeakeasyBase {
  /**
   * Output only. The ad type to target. Only applicable to insertion order targeting and new line items supporting the specified ad type will inherit this targeting option by default. Possible values are: * `AD_TYPE_DISPLAY`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_DISPLAY_DEFAULT`. * `AD_TYPE_VIDEO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_VIDEO_DEFAULT`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "adType" })
  adType?: OnScreenPositionAssignedTargetingOptionDetailsAdTypeEnum;

  /**
   * Output only. The on screen position.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "onScreenPosition" })
  onScreenPosition?: OnScreenPositionAssignedTargetingOptionDetailsOnScreenPositionEnum;

  /**
   * Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "targetingOptionId" })
  targetingOptionId?: string;
}

/**
 * On screen position targeting option details. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.
 */
export class OnScreenPositionAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
  /**
   * Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "targetingOptionId" })
  targetingOptionId?: string;
}
