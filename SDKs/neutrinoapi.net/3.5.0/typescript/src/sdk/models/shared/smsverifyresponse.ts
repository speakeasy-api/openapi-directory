import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SmsVerifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numberValid" })
  numberValid: boolean;

  @SpeakeasyMetadata({ data: "json, name=securityCode" })
  securityCode: string;

  @SpeakeasyMetadata({ data: "json, name=sent" })
  sent: boolean;
}
