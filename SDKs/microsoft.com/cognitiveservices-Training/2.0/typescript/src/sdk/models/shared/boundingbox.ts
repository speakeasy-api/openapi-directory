/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class BoundingBox extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "height" })
  height?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "left" })
  left?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "top" })
  top?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "width" })
  width?: number;
}
