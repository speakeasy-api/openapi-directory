import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTargetsTargetIdEventsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class GetTargetsTargetIdEventsId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdEventsId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdEventsId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetTargetsTargetIdEventsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetsTargetIdEventsIdPathParams;
}


export class GetTargetsTargetIdEventsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  event?: shared.Event;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsTargetIdEventsId401ApplicationJSONObject?: GetTargetsTargetIdEventsId401ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdEventsId403ApplicationJSONObject?: GetTargetsTargetIdEventsId403ApplicationJson;

  @SpeakeasyMetadata()
  getTargetsTargetIdEventsId404ApplicationJSONObject?: GetTargetsTargetIdEventsId404ApplicationJson;
}
