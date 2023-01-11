import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutBilling401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutBilling403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PutBillingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Billing;
}


export class PutBillingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  billing?: shared.Billing;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  putBilling401ApplicationJSONObject?: PutBilling401ApplicationJson;

  @SpeakeasyMetadata()
  putBilling403ApplicationJSONObject?: PutBilling403ApplicationJson;
}
