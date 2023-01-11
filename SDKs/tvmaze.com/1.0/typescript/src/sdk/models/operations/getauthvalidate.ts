import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAuthValidate200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=premium" })
  premium?: number;
}


export class GetAuthValidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAuthValidate200ApplicationJSONObject?: GetAuthValidate200ApplicationJson;
}
