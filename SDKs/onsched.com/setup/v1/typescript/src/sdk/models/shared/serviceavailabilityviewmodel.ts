/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AvailabilityViewModel2 } from "./availabilityviewmodel2";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class ServiceAvailabilityViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ignoreBusinessHours" })
  ignoreBusinessHours?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "serviceId" })
  serviceId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "serviceName" })
  serviceName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "weekdays" })
  @Type(() => AvailabilityViewModel2)
  weekdays?: AvailabilityViewModel2;
}
