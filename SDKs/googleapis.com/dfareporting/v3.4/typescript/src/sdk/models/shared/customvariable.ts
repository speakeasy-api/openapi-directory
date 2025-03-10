/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Custom variable.
 */
export class CustomVariable extends SpeakeasyBase {
  /**
   * The index of the custom variable.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "index" })
  index?: string;

  /**
   * Identifies what kind of resource this is. Value: the fixed string "dfareporting#customVariable".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "kind" })
  kind?: string;

  /**
   * The value of the custom variable. The length of string must not exceed 50 characters.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}
