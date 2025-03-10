/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class PointPointDailyAllDayCloudCoverData extends SpeakeasyBase {
  /**
   * Percentage of sky covered by high clouds. (allday avg)
   *
   * @remarks
   * Unit: \%
   */
  @SpeakeasyMetadata()
  @Expose({ name: "high" })
  high?: number;

  /**
   * Percentage of sky covered by low clouds. (allday avg)
   *
   * @remarks
   * Unit: \%
   */
  @SpeakeasyMetadata()
  @Expose({ name: "low" })
  low?: number;

  /**
   * Percentage of sky covered by middle clouds. (allday avg)
   *
   * @remarks
   * Unit: \%
   */
  @SpeakeasyMetadata()
  @Expose({ name: "middle" })
  middle?: number;

  /**
   * Percentage of sky covered by clouds. (allday avg)
   *
   * @remarks
   * Unit: \%
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total?: number;
}
