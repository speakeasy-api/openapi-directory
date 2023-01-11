import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTargetsTargetIdSeverityTrendPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsHigh extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=0" })
  zero?: Date;

  @SpeakeasyMetadata({ data: "json, name=1" })
  one?: number;
}


export class GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsLow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=0" })
  zero?: Date;

  @SpeakeasyMetadata({ data: "json, name=1" })
  one?: number;
}


export class GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsMedium extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=0" })
  zero?: Date;

  @SpeakeasyMetadata({ data: "json, name=1" })
  one?: number;
}


export class GetTargetsTargetIdSeverityTrend200ApplicationJsonResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=high", elemType: GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsHigh })
  high?: GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsHigh[];

  @SpeakeasyMetadata({ data: "json, name=low", elemType: GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsLow })
  low?: GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsLow[];

  @SpeakeasyMetadata({ data: "json, name=medium", elemType: GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsMedium })
  medium?: GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsMedium[];
}


export class GetTargetsTargetIdSeverityTrend200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: GetTargetsTargetIdSeverityTrend200ApplicationJsonResults;

  @SpeakeasyMetadata({ data: "json, name=step" })
  step?: number;
}


export class GetTargetsTargetIdSeverityTrendRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetsTargetIdSeverityTrendPathParams;
}


export class GetTargetsTargetIdSeverityTrendResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsTargetIdSeverityTrend200ApplicationJSONObject?: GetTargetsTargetIdSeverityTrend200ApplicationJson;
}
