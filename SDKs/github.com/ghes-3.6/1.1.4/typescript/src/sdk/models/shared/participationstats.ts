/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The array order is oldest week (index 0) to most recent week.
 */
export class ParticipationStats extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "all" })
  all: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "owner" })
  owner: number[];
}
