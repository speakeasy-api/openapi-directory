/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Remarketing List Targeting Expression.
 */
export class ListTargetingExpression extends SpeakeasyBase {
  /**
   * Expression describing which lists are being targeted by the ad.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "expression" })
  expression?: string;
}
