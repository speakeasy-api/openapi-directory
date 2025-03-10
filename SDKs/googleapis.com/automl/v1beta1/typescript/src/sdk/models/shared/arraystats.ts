/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DataStats } from "./datastats";
import { Expose, Type } from "class-transformer";

/**
 * The data statistics of a series of ARRAY values.
 */
export class ArrayStats extends SpeakeasyBase {
  /**
   * The data statistics of a series of values that share the same DataType.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "memberStats" })
  @Type(() => DataStats)
  memberStats?: DataStats;
}
