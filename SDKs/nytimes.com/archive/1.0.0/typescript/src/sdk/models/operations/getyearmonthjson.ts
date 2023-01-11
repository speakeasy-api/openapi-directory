import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetYearMonthJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=month" })
  month: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetYearMonthJson200ApplicationJsonResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hits" })
  hits?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: number;
}


export class GetYearMonthJson200ApplicationJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=docs", elemType: shared.Doc })
  docs?: shared.Doc[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: GetYearMonthJson200ApplicationJsonResponseMeta;
}


export class GetYearMonthJson200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: GetYearMonthJson200ApplicationJsonResponse;
}


export class GetYearMonthJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetYearMonthJsonPathParams;
}


export class GetYearMonthJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getYearMonthJSON200ApplicationJSONObject?: GetYearMonthJson200ApplicationJson;
}
