import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTargetsTargetIdAverageFixTimePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class GetTargetsTargetIdAverageFixTime200ApplicationJsonResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=high" })
  high?: number;

  @SpeakeasyMetadata({ data: "json, name=low" })
  low?: number;

  @SpeakeasyMetadata({ data: "json, name=medium" })
  medium?: number;
}


export class GetTargetsTargetIdAverageFixTime200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: GetTargetsTargetIdAverageFixTime200ApplicationJsonResults;
}


export class GetTargetsTargetIdAverageFixTimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetsTargetIdAverageFixTimePathParams;
}


export class GetTargetsTargetIdAverageFixTimeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsTargetIdAverageFixTime200ApplicationJSONObject?: GetTargetsTargetIdAverageFixTime200ApplicationJson;
}
