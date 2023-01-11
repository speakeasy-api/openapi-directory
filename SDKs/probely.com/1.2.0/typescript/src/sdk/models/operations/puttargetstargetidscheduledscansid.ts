import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutTargetsTargetIdScheduledscansIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PutTargetsTargetIdScheduledscansIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=recurrence" })
  recurrence?: shared.RecurrenceEnum;
}


export class PutTargetsTargetIdScheduledscansId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PutTargetsTargetIdScheduledscansId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdScheduledscansId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdScheduledscansId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdScheduledscansIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutTargetsTargetIdScheduledscansIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutTargetsTargetIdScheduledscansIdRequestBody;
}


export class PutTargetsTargetIdScheduledscansIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scheduled?: shared.Scheduled;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  putTargetsTargetIdScheduledscansId400ApplicationJSONObject?: PutTargetsTargetIdScheduledscansId400ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsTargetIdScheduledscansId401ApplicationJSONObject?: PutTargetsTargetIdScheduledscansId401ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsTargetIdScheduledscansId403ApplicationJSONObject?: PutTargetsTargetIdScheduledscansId403ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsTargetIdScheduledscansId404ApplicationJSONObject?: PutTargetsTargetIdScheduledscansId404ApplicationJson;
}
