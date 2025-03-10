/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

/**
 * An SSID number to include. If not specified, eveusage histories application usagents for all SSIDs will be returned.
 */
export enum GetNetworkClientsApplicationUsageSsidNumberEnum {
  Zero = "0",
  One = "1",
  Two = "2",
  Three = "3",
  Four = "4",
  Five = "5",
  Six = "6",
  Seven = "7",
  Eight = "8",
  Nine = "9",
  Ten = "10",
  Eleven = "11",
  Twelve = "12",
  Thirteen = "13",
  Fourteen = "14",
}

export class GetNetworkClientsApplicationUsageRequest extends SpeakeasyBase {
  /**
   * A list of client keys, MACs or IPs separated by comma.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=clients",
  })
  clients: string;

  /**
   * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=endingBefore",
  })
  endingBefore?: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=networkId",
  })
  networkId: string;

  /**
   * The number of entries per page returned. Acceptable range is 3 - 1000.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=perPage",
  })
  perPage?: number;

  /**
   * An SSID number to include. If not specified, eveusage histories application usagents for all SSIDs will be returned.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=ssidNumber",
  })
  ssidNumber?: GetNetworkClientsApplicationUsageSsidNumberEnum;

  /**
   * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=startingAfter",
  })
  startingAfter?: string;

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

export class GetNetworkClientsApplicationUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Successful operation
   */
  @SpeakeasyMetadata()
  getNetworkClientsApplicationUsage200ApplicationJSONObjects?: Record<
    string,
    any
  >[];
}
