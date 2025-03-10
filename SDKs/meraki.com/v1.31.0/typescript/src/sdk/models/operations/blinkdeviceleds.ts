/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class BlinkDeviceLedsRequestBody extends SpeakeasyBase {
  /**
   * The duration in seconds. Must be between 5 and 120. Default is 20 seconds
   */
  @SpeakeasyMetadata()
  @Expose({ name: "duration" })
  duration?: number;

  /**
   * The duty cycle as the percent active. Must be between 10 and 90. Default is 50.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "duty" })
  duty?: number;

  /**
   * The period in milliseconds. Must be between 100 and 1000. Default is 160 milliseconds
   */
  @SpeakeasyMetadata()
  @Expose({ name: "period" })
  period?: number;
}

export class BlinkDeviceLedsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: BlinkDeviceLedsRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=serial",
  })
  serial: string;
}

export class BlinkDeviceLedsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Successful operation
   */
  @SpeakeasyMetadata()
  blinkDeviceLeds202ApplicationJSONObject?: Record<string, any>;
}
