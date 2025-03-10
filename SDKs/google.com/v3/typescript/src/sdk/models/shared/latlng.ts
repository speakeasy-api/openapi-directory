/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
 */
export class LatLng extends SpeakeasyBase {
  /**
   * The latitude in degrees. It must be in the range [-90.0, +90.0].
   */
  @SpeakeasyMetadata()
  @Expose({ name: "latitude" })
  latitude?: number;

  /**
   * The longitude in degrees. It must be in the range [-180.0, +180.0].
   */
  @SpeakeasyMetadata()
  @Expose({ name: "longitude" })
  longitude?: number;
}
