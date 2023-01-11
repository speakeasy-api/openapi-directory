import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutTargetsTargetIdWebhooksIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PutTargetsTargetIdWebhooksId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PutTargetsTargetIdWebhooksId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdWebhooksId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdWebhooksId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutTargetsTargetIdWebhooksIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutTargetsTargetIdWebhooksIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WebhookInput;
}


export class PutTargetsTargetIdWebhooksIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhook?: shared.Webhook;

  @SpeakeasyMetadata()
  putTargetsTargetIdWebhooksId400ApplicationJSONObject?: PutTargetsTargetIdWebhooksId400ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsTargetIdWebhooksId401ApplicationJSONObject?: PutTargetsTargetIdWebhooksId401ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsTargetIdWebhooksId403ApplicationJSONObject?: PutTargetsTargetIdWebhooksId403ApplicationJson;

  @SpeakeasyMetadata()
  putTargetsTargetIdWebhooksId404ApplicationJSONObject?: PutTargetsTargetIdWebhooksId404ApplicationJson;
}
