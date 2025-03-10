/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Position } from "./position";
import { Expose, Type } from "class-transformer";

/**
 * A suggestion by the service to the worker to dynamically split the WorkItem.
 */
export class ApproximateSplitRequest extends SpeakeasyBase {
  /**
   * A fraction at which to split the work item, from 0.0 (beginning of the input) to 1.0 (end of the input).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "fractionConsumed" })
  fractionConsumed?: number;

  /**
   * The fraction of the remainder of work to split the work item at, from 0.0 (split at the current position) to 1.0 (end of the input).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "fractionOfRemainder" })
  fractionOfRemainder?: number;

  /**
   * Position defines a position within a collection of data. The value can be either the end position, a key (used with ordered collections), a byte offset, or a record index.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "position" })
  @Type(() => Position)
  position?: Position;
}
