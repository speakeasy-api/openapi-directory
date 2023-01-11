import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostWebhooks400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PostWebhooks401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostWebhooks403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostWebhooks404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostWebhooksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WebhookInput;
}


export class PostWebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhook?: shared.Webhook;

  @SpeakeasyMetadata()
  postWebhooks400ApplicationJSONObject?: PostWebhooks400ApplicationJson;

  @SpeakeasyMetadata()
  postWebhooks401ApplicationJSONObject?: PostWebhooks401ApplicationJson;

  @SpeakeasyMetadata()
  postWebhooks403ApplicationJSONObject?: PostWebhooks403ApplicationJson;

  @SpeakeasyMetadata()
  postWebhooks404ApplicationJSONObject?: PostWebhooks404ApplicationJson;
}
