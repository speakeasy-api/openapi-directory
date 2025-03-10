/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class PointPointHourlyPrecipitationData extends SpeakeasyBase {
  /**
   * Total precipitation amount accumulated since last hour.
   *
   * @remarks
   * Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h
   */
  @SpeakeasyMetadata()
  @Expose({ name: "convective" })
  convective?: number;

  /**
   * Precipitation in the surrounding of queried location. The data is 7x7 ASCII art string, queried location being in the center. Character `#` means there is precipitation, `.` means no precipitation. The distance between neighboring cells is 0.25°.
   *
   * @remarks
   * Unit: rainspot
   */
  @SpeakeasyMetadata()
  @Expose({ name: "rainspot" })
  rainspot?: Uint8Array;

  /**
   * Total precipitation amount accumulated since last hour.
   *
   * @remarks
   * Units: metric = mm/h, us = inches per hour, uk = mm/h, ca = mm/h
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total?: number;

  /**
   * Precipitation type, may be one of:
   *
   * @remarks
   *
   * * `none`, it there is no precipitation
   * * `rain`
   * * `snow`
   * * `rain_snow`
   * * `ice pellets`
   * * `frozen rain`
   *
   * Unit: precipitation type
   */
  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: Uint8Array;
}
