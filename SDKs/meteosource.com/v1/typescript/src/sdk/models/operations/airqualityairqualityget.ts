/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class AirQualityAirQualityGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Key",
  })
  apiKeyHeader: string;
}

export class AirQualityAirQualityGetRequest extends SpeakeasyBase {
  /**
   * Your unique API key. You can either specify it in this parameter, or set it in `X-API-Key` header.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  /**
   * Latitude in format 12N, 12.3N, 12.3, or 13S, 13.2S, -13.4
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat?: string;

  /**
   * Longitude in format 12E, 12.3E, 12.3, or 13W, 13.2W, -13.4
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lon" })
  lon?: string;

  /**
   * Identifier of a place. To obtain the `place_id` for the location you want, please use endpoints `/find_places_prefix` (search by prefix) or `/find_places` (search by full name).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=place_id",
  })
  placeId?: string;

  /**
   * Timezone to be used for the date fields. If not specified, local timezone of the forecast location will be used.
   *
   * @remarks
   * The format is according to the tzinfo database, so values like `Europe/Prague` or `UTC` can be used.
   * Alternatively you may use the value ``auto`` in which case the local timezone of the location is used.
   * The full list of valid timezone strings can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=timezone",
  })
  timezone?: string;
}

export class AirQualityAirQualityGetResponse extends SpeakeasyBase {
  /**
   * Successful Response
   */
  @SpeakeasyMetadata()
  airQualityPointData?: shared.AirQualityPointData;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Error in passed parameter.
   */
  @SpeakeasyMetadata()
  generalRequestError?: shared.GeneralRequestError;

  /**
   * Validation Error
   */
  @SpeakeasyMetadata()
  httpValidationError?: shared.HTTPValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
