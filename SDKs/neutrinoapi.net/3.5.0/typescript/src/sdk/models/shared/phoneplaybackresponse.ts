import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PhonePlaybackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calling" })
  calling: boolean;

  @SpeakeasyMetadata({ data: "json, name=numberValid" })
  numberValid: boolean;
}
