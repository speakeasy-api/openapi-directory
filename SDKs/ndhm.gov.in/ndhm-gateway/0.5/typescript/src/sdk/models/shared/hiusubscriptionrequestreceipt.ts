import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";



export class HiuSubscriptionRequestReceiptSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


export class HiuSubscriptionRequestReceipt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ErrorT;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=resp" })
  resp: RequestReference;

  @SpeakeasyMetadata({ data: "json, name=subscriptionRequest" })
  subscriptionRequest?: HiuSubscriptionRequestReceiptSubscriptionRequest;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
