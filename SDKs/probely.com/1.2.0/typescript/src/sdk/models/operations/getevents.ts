import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEvents200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_total" })
  pageTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Event })
  results?: shared.Event[];
}


export class GetEvents401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetEvents403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getEvents200ApplicationJSONObject?: GetEvents200ApplicationJson;

  @SpeakeasyMetadata()
  getEvents401ApplicationJSONObject?: GetEvents401ApplicationJson;

  @SpeakeasyMetadata()
  getEvents403ApplicationJSONObject?: GetEvents403ApplicationJson;
}
