/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class LineTimetableToRequest extends SpeakeasyBase {
  /**
   * The originating station's stop point id (station naptan code e.g. 940GZZLUASL, you can use /StopPoint/Search/{query} endpoint to find a stop point id from a station name)
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=fromStopPointId",
  })
  fromStopPointId: string;

  /**
   * A single line id e.g. victoria
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  /**
   * The destination stations's Naptan code
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=toStopPointId",
  })
  toStopPointId: string;
}

export class LineTimetableToResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  tflApiPresentationEntitiesTimetableResponse?: shared.TflApiPresentationEntitiesTimetableResponse;
}
