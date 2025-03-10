/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EmbeddedObject } from "./embeddedobject";
import { Expose, Type } from "class-transformer";

/**
 * Properties of an InlineObject.
 */
export class InlineObjectProperties extends SpeakeasyBase {
  /**
   * An embedded object in the document.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "embeddedObject" })
  @Type(() => EmbeddedObject)
  embeddedObject?: EmbeddedObject;
}
