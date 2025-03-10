/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ProductDestination extends SpeakeasyBase {
  /**
   * The name of the destination.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "destinationName" })
  destinationName?: string;

  /**
   * Whether the destination is required, excluded or should be validated. Acceptable values are: - "`default`" - "`excluded`" - "`optional`" - "`required`"
   */
  @SpeakeasyMetadata()
  @Expose({ name: "intention" })
  intention?: string;
}
