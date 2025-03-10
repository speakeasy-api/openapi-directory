/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class GetNetworkClientsOverviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=networkId",
  })
  networkId: string;

  /**
   * The time resolution in seconds for returned data. The valid resolutions are: 7200, 86400, 604800, 2592000. The default is 604800.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=resolution",
  })
  resolution?: number;

  /**
   * The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" })
  t0?: string;

  /**
   * The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" })
  t1?: string;

  /**
   * The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=timespan",
  })
  timespan?: number;
}

export class GetNetworkClientsOverviewResponse extends SpeakeasyBase {
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
  getNetworkClientsOverview200ApplicationJSONObject?: Record<string, any>;
}
