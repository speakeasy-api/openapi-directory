/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GoogleLocation } from "./googlelocation";
import { Expose, Type } from "class-transformer";

/**
 * Response message for GoogleLocations.SearchGoogleLocations.
 */
export class SearchGoogleLocationsResponse extends SpeakeasyBase {
  /**
   * A collection of GoogleLocations that are potential matches to the specified request, listed in order from most to least accuracy.
   */
  @SpeakeasyMetadata({ elemType: GoogleLocation })
  @Expose({ name: "googleLocations" })
  @Type(() => GoogleLocation)
  googleLocations?: GoogleLocation[];
}
