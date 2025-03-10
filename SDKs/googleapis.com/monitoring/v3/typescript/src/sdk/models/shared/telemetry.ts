/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Configuration for how to query telemetry on a Service.
 */
export class Telemetry extends SpeakeasyBase {
  /**
   * The full name of the resource that defines this service. Formatted as described in https://cloud.google.com/apis/design/resource_names.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resourceName" })
  resourceName?: string;
}
