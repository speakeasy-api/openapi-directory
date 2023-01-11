import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostBillingSubscribe400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PostBillingSubscribe401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostBillingSubscribe403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostBillingSubscribeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SubscriptionInput;
}


export class PostBillingSubscribeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invoice?: shared.Invoice;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postBillingSubscribe400ApplicationJSONObject?: PostBillingSubscribe400ApplicationJson;

  @SpeakeasyMetadata()
  postBillingSubscribe401ApplicationJSONObject?: PostBillingSubscribe401ApplicationJson;

  @SpeakeasyMetadata()
  postBillingSubscribe403ApplicationJSONObject?: PostBillingSubscribe403ApplicationJson;
}
