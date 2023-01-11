import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutWebhooksIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutWebhooksId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PutWebhooksId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutWebhooksId403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutWebhooksId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutWebhooksIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutWebhooksIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WebhookInput;
}


export class PutWebhooksIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhook?: shared.Webhook;

  @SpeakeasyMetadata()
  putWebhooksId400ApplicationJSONObject?: PutWebhooksId400ApplicationJson;

  @SpeakeasyMetadata()
  putWebhooksId401ApplicationJSONObject?: PutWebhooksId401ApplicationJson;

  @SpeakeasyMetadata()
  putWebhooksId403ApplicationJSONObject?: PutWebhooksId403ApplicationJson;

  @SpeakeasyMetadata()
  putWebhooksId404ApplicationJSONObject?: PutWebhooksId404ApplicationJson;
}
