/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListOrdersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2: string;
}

export class ListOrdersRequest extends SpeakeasyBase {
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
   * The maximum number of payments to return in a single response. This value cannot exceed 200.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  /**
   * The ID of the location to list online store orders for.
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

export class ListOrdersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Success
   */
  @SpeakeasyMetadata({ elemType: shared.V1Order })
  v1Orders?: shared.V1Order[];
}
