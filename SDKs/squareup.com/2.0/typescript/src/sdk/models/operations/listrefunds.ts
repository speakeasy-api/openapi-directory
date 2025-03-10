/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListRefundsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2: string;
}

export class ListRefundsRequest extends SpeakeasyBase {
  /**
   * A pagination cursor to retrieve the next set of results for your
   *
   * @remarks
   * original query to the endpoint.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=batch_token",
  })
  batchToken?: string;

  /**
   * The beginning of the requested reporting period, in ISO 8601 format. If this value is before January 1, 2013 (2013-01-01T00:00:00Z), this endpoint returns an error. Default value: The current time minus one year.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=begin_time",
  })
  beginTime?: string;

  /**
   * The end of the requested reporting period, in ISO 8601 format. If this value is more than one year greater than begin_time, this endpoint returns an error. Default value: The current time.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=end_time",
  })
  endTime?: string;

  /**
   * The approximate number of refunds to return in a single response. Default: 100. Max: 200. Response may contain more results than the prescribed limit when refunds are made simultaneously to multiple tenders in a payment or when refunds are generated in an exchange to account for the value of returned goods.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  /**
   * The ID of the location to list refunds for.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=location_id",
  })
  locationId: string;

  /**
   * The order in which payments are listed in the response.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: string;
}

export class ListRefundsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Success
   */
  @SpeakeasyMetadata({ elemType: shared.V1Refund })
  v1Refunds?: shared.V1Refund[];
}
