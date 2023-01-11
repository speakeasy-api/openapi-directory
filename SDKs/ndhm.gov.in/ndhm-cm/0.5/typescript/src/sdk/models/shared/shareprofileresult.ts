import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShareProfileAcknowledgement } from "./shareprofileacknowledgement";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";



export class ShareProfileResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acknowledgement" })
  acknowledgement: ShareProfileAcknowledgement;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ErrorT;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=resp" })
  resp: RequestReference;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;
}
