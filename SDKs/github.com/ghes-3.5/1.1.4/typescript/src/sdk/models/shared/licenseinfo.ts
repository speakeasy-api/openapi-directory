/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Response
 */
export class LicenseInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "days_until_expiration" })
  daysUntilExpiration?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "expire_at" })
  expireAt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "kind" })
  kind?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "seats" })
  seats?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "seats_available" })
  seatsAvailable?: any;

  @SpeakeasyMetadata()
  @Expose({ name: "seats_used" })
  seatsUsed?: number;
}
