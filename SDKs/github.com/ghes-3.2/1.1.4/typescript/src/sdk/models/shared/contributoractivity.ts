/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { Expose, Type } from "class-transformer";

export class ContributorActivityWeeks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "a" })
  a?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "c" })
  c?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "d" })
  d?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "w" })
  w?: number;
}

/**
 * Contributor Activity
 */
export class ContributorActivity extends SpeakeasyBase {
  /**
   * Simple User
   */
  @SpeakeasyMetadata()
  @Expose({ name: "author" })
  @Type(() => NullableSimpleUser)
  author: NullableSimpleUser;

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total: number;

  @SpeakeasyMetadata({ elemType: ContributorActivityWeeks })
  @Expose({ name: "weeks" })
  @Type(() => ContributorActivityWeeks)
  weeks: ContributorActivityWeeks[];
}
