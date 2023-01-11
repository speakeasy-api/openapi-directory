import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetEventsId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetEventsId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetEventsId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetEventsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventsIdPathParams;
}


export class GetEventsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  event?: shared.Event;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getEventsId401ApplicationJSONObject?: GetEventsId401ApplicationJson;

  @SpeakeasyMetadata()
  getEventsId403ApplicationJSONObject?: GetEventsId403ApplicationJson;

  @SpeakeasyMetadata()
  getEventsId404ApplicationJSONObject?: GetEventsId404ApplicationJson;
}
