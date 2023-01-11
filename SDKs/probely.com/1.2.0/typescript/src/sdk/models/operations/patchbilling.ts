import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchBilling401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchBilling403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class PatchBillingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Billing;
}


export class PatchBillingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  billing?: shared.Billing;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchBilling401ApplicationJSONObject?: PatchBilling401ApplicationJson;

  @SpeakeasyMetadata()
  patchBilling403ApplicationJSONObject?: PatchBilling403ApplicationJson;
}
