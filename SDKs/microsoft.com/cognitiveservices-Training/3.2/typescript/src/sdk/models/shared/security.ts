import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeApimKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Training-Key" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apimKey: SchemeApimKey;
}
