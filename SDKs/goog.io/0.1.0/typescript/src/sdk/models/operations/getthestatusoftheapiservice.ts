import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTheStatusOfTheApiService200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: boolean;
}


export class GetTheStatusOfTheApiServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getTheStatusOfTheAPIService200ApplicationJSONObject?: GetTheStatusOfTheApiService200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
