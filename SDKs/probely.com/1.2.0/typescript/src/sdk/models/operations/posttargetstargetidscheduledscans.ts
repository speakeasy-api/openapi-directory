import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTargetsTargetIdScheduledscansPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PostTargetsTargetIdScheduledscansRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=recurrence" })
  recurrence?: shared.RecurrenceEnum;
}


export class PostTargetsTargetIdScheduledscans400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PostTargetsTargetIdScheduledscans401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdScheduledscans403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdScheduledscans404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdScheduledscansRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTargetsTargetIdScheduledscansPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostTargetsTargetIdScheduledscansRequestBody;
}


export class PostTargetsTargetIdScheduledscansResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scheduled?: shared.Scheduled;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postTargetsTargetIdScheduledscans400ApplicationJSONObject?: PostTargetsTargetIdScheduledscans400ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdScheduledscans401ApplicationJSONObject?: PostTargetsTargetIdScheduledscans401ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdScheduledscans403ApplicationJSONObject?: PostTargetsTargetIdScheduledscans403ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdScheduledscans404ApplicationJSONObject?: PostTargetsTargetIdScheduledscans404ApplicationJson;
}
