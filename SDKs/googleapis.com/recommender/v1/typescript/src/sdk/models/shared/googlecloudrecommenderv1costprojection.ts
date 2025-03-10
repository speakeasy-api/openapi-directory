/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GoogleTypeMoney } from "./googletypemoney";
import { Expose, Type } from "class-transformer";

/**
 * Contains metadata about how much money a recommendation can save or incur.
 */
export class GoogleCloudRecommenderV1CostProjection extends SpeakeasyBase {
  /**
   * Represents an amount of money with its currency type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "cost" })
  @Type(() => GoogleTypeMoney)
  cost?: GoogleTypeMoney;

  /**
   * Duration for which this cost applies.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "duration" })
  duration?: string;
}
