import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchTargetsTargetIdWebhooksIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PatchTargetsTargetIdWebhooksId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PatchTargetsTargetIdWebhooksId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdWebhooksId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdWebhooksId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchTargetsTargetIdWebhooksIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchTargetsTargetIdWebhooksIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WebhookInput;
}


export class PatchTargetsTargetIdWebhooksIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhook?: shared.Webhook;

  @SpeakeasyMetadata()
  patchTargetsTargetIdWebhooksId400ApplicationJSONObject?: PatchTargetsTargetIdWebhooksId400ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdWebhooksId401ApplicationJSONObject?: PatchTargetsTargetIdWebhooksId401ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdWebhooksId403ApplicationJSONObject?: PatchTargetsTargetIdWebhooksId403ApplicationJson;

  @SpeakeasyMetadata()
  patchTargetsTargetIdWebhooksId404ApplicationJSONObject?: PatchTargetsTargetIdWebhooksId404ApplicationJson;
}
