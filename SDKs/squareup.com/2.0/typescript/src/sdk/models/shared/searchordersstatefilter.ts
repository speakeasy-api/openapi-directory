/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Filter by the current order `state`.
 */
export class SearchOrdersStateFilter extends SpeakeasyBase {
  /**
   * States to filter for.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "states" })
  states: string[];
}
