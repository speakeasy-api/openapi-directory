import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SmsMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numberValid" })
  numberValid: boolean;

  @SpeakeasyMetadata({ data: "json, name=sent" })
  sent: boolean;
}
