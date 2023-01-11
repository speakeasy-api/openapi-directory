import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VerifySecurityCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=verified" })
  verified: boolean;
}
