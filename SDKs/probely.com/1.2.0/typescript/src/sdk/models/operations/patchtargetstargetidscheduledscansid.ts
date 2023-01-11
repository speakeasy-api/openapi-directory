import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchTargetsTargetIdScheduledscansIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PatchTargetsTargetIdScheduledscansIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=recurrence" })
  recurrence?: shared.RecurrenceEnum;
}


export class PatchTargetsTargetIdScheduledscansId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PatchTargetsTargetIdScheduledscansId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdScheduledscansId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdScheduledscansId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdScheduledscansIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchTargetsTargetIdScheduledscansIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PatchTargetsTargetIdScheduledscansIdRequestBody;
}


export class PatchTargetsTargetIdScheduledscansIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scheduled?: shared.Scheduled;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchTargetsTargetIdScheduledscansId400ApplicationJSONObject?: PatchTargetsTargetIdScheduledscansId400ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdScheduledscansId401ApplicationJSONObject?: PatchTargetsTargetIdScheduledscansId401ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdScheduledscansId403ApplicationJSONObject?: PatchTargetsTargetIdScheduledscansId403ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdScheduledscansId404ApplicationJSONObject?: PatchTargetsTargetIdScheduledscansId404ApplicationJson;
}
