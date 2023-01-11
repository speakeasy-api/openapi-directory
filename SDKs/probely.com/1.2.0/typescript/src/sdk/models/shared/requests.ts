import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Requests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=request" })
  request?: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: string;
}
