/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Availability } from "./availability";
import { ErrorT } from "./error";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class SearchAvailabilityResponse extends SpeakeasyBase {
  /**
   * List of slots available for booking.
   */
  @SpeakeasyMetadata({ elemType: Availability })
  @Expose({ name: "availabilities" })
  @Type(() => Availability)
  availabilities?: Availability[];

  /**
   * Any errors that occurred during the request.
   */
  @SpeakeasyMetadata({ elemType: ErrorT })
  @Expose({ name: "errors" })
  @Type(() => ErrorT)
  errors?: ErrorT[];
}
