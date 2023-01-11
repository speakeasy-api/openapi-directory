import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostBillingEstimate400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata({ data: "json, name=non_field_errors" })
  nonFieldErrors?: string[];
}


export class PostBillingEstimate401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostBillingEstimate403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PostBillingEstimateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SubscriptionInput;
}


export class PostBillingEstimateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invoice?: shared.Invoice;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postBillingEstimate400ApplicationJSONObject?: PostBillingEstimate400ApplicationJson;

  @SpeakeasyMetadata()
  postBillingEstimate401ApplicationJSONObject?: PostBillingEstimate401ApplicationJson;

  @SpeakeasyMetadata()
  postBillingEstimate403ApplicationJSONObject?: PostBillingEstimate403ApplicationJson;
}
