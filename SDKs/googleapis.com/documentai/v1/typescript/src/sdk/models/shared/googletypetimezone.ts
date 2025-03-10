/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
 */
export class GoogleTypeTimeZone extends SpeakeasyBase {
  /**
   * IANA Time Zone Database time zone, e.g. "America/New_York".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: string;

  /**
   * Optional. IANA Time Zone Database version number, e.g. "2019a".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "version" })
  version?: string;
}
