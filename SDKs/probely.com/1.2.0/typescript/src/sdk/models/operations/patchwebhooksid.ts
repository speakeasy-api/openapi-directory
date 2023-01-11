import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchWebhooksIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchWebhooksId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PatchWebhooksId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchWebhooksId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchWebhooksId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchWebhooksIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchWebhooksIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WebhookInput;
}


export class PatchWebhooksIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhook?: shared.Webhook;

  @SpeakeasyMetadata()
  patchWebhooksId400ApplicationJSONObject?: PatchWebhooksId400ApplicationJson;

  @SpeakeasyMetadata()
  patchWebhooksId401ApplicationJSONObject?: PatchWebhooksId401ApplicationJson;

  @SpeakeasyMetadata()
  patchWebhooksId403ApplicationJSONObject?: PatchWebhooksId403ApplicationJson;

  @SpeakeasyMetadata()
  patchWebhooksId404ApplicationJSONObject?: PatchWebhooksId404ApplicationJson;
}
