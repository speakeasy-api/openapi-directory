import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveBgJsonResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result_b64" })
  resultB64?: string;
}


export class RemoveBgJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: RemoveBgJsonResponseData;
}
