/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * List of integer values.
 */
export class IntegerValues extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "values" })
  values?: string[];
}
