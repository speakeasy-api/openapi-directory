import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeApimKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Ocp-Apim-Subscription-Key" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apimKey: SchemeApimKey;
}
