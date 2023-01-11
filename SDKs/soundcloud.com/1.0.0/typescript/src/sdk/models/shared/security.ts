import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeAuthHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  apiKey: string;
}


export class SchemeClientId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=client_id" })
  apiKey: string;
}
