import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PhoneVerifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calling" })
  calling: boolean;

  @SpeakeasyMetadata({ data: "json, name=numberValid" })
  numberValid: boolean;

  @SpeakeasyMetadata({ data: "json, name=securityCode" })
  securityCode: string;
}
