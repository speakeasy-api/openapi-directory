/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Supervisor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "label" })
  label: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value: Record<string, any>;
}
