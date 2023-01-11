import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTargetsTargetIdEventsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class GetTargetsTargetIdEvents200ApplicationJson extends SpeakeasyBase {
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


export class GetTargetsTargetIdEvents401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdEvents403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdEvents404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetsTargetIdEventsPathParams;
}


export class GetTargetsTargetIdEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsTargetIdEvents200ApplicationJSONObject?: GetTargetsTargetIdEvents200ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdEvents401ApplicationJSONObject?: GetTargetsTargetIdEvents401ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdEvents403ApplicationJSONObject?: GetTargetsTargetIdEvents403ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdEvents404ApplicationJSONObject?: GetTargetsTargetIdEvents404ApplicationJson;
}
