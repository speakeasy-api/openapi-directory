/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TimeInterval } from "./timeinterval";
import { Expose, Type } from "class-transformer";

/**
 * All the information pertaining to an event featured in a local post.
 */
export class LocalPostEvent extends SpeakeasyBase {
  /**
   * An interval of time, inclusive. It must contain all fields to be valid.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "schedule" })
  @Type(() => TimeInterval)
  schedule?: TimeInterval;

  /**
   * Name of the event.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;
}
