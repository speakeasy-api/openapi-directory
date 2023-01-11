import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTargetsAllAverageFixTime200ApplicationJsonResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=high" })
  high?: number;

  @SpeakeasyMetadata({ data: "json, name=low" })
  low?: number;

  @SpeakeasyMetadata({ data: "json, name=medium" })
  medium?: number;
}


export class GetTargetsAllAverageFixTime200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: GetTargetsAllAverageFixTime200ApplicationJsonResults;
}


export class GetTargetsAllAverageFixTimeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsAllAverageFixTime200ApplicationJSONObject?: GetTargetsAllAverageFixTime200ApplicationJson;
}
