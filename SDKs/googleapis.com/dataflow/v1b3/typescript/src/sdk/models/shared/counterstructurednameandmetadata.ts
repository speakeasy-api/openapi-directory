/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CounterMetadata } from "./countermetadata";
import { CounterStructuredName } from "./counterstructuredname";
import { Expose, Type } from "class-transformer";

/**
 * A single message which encapsulates structured name and metadata for a given counter.
 */
export class CounterStructuredNameAndMetadata extends SpeakeasyBase {
  /**
   * CounterMetadata includes all static non-name non-value counter attributes.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => CounterMetadata)
  metadata?: CounterMetadata;

  /**
   * Identifies a counter within a per-job namespace. Counters whose structured names are the same get merged into a single value for the job.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  @Type(() => CounterStructuredName)
  name?: CounterStructuredName;
}
