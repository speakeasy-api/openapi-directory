/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Distance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "distance" })
  distance: number;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;
}
