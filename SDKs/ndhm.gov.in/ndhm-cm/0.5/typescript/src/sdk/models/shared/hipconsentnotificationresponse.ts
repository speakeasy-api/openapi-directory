import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsentAcknowledgement } from "./consentacknowledgement";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";



export class HipConsentNotificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledgement" })
  acknowledgement?: ConsentAcknowledgement;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ErrorT;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=resp" })
  resp: RequestReference;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
