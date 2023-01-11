import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTargetsTargetIdWebhooksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class PostTargetsTargetIdWebhooks400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PostTargetsTargetIdWebhooks401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdWebhooks403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdWebhooks404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostTargetsTargetIdWebhooksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTargetsTargetIdWebhooksPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WebhookInput;
}


export class PostTargetsTargetIdWebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webhook?: shared.Webhook;

  @SpeakeasyMetadata()
  postTargetsTargetIdWebhooks400ApplicationJSONObject?: PostTargetsTargetIdWebhooks400ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdWebhooks401ApplicationJSONObject?: PostTargetsTargetIdWebhooks401ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdWebhooks403ApplicationJSONObject?: PostTargetsTargetIdWebhooks403ApplicationJson;

  @SpeakeasyMetadata()
  postTargetsTargetIdWebhooks404ApplicationJSONObject?: PostTargetsTargetIdWebhooks404ApplicationJson;
}
