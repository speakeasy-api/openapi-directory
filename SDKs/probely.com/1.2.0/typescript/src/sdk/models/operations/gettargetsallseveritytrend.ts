import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTargetsAllSeverityTrend200ApplicationJsonResultsHigh extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=0" })
  zero?: Date;

  @SpeakeasyMetadata({ data: "json, name=1" })
  one?: number;
}


export class GetTargetsAllSeverityTrend200ApplicationJsonResultsLow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=0" })
  zero?: Date;

  @SpeakeasyMetadata({ data: "json, name=1" })
  one?: number;
}


export class GetTargetsAllSeverityTrend200ApplicationJsonResultsMedium extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=0" })
  zero?: Date;

  @SpeakeasyMetadata({ data: "json, name=1" })
  one?: number;
}


export class GetTargetsAllSeverityTrend200ApplicationJsonResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=high", elemType: GetTargetsAllSeverityTrend200ApplicationJsonResultsHigh })
  high?: GetTargetsAllSeverityTrend200ApplicationJsonResultsHigh[];

  @SpeakeasyMetadata({ data: "json, name=low", elemType: GetTargetsAllSeverityTrend200ApplicationJsonResultsLow })
  low?: GetTargetsAllSeverityTrend200ApplicationJsonResultsLow[];

  @SpeakeasyMetadata({ data: "json, name=medium", elemType: GetTargetsAllSeverityTrend200ApplicationJsonResultsMedium })
  medium?: GetTargetsAllSeverityTrend200ApplicationJsonResultsMedium[];
}


export class GetTargetsAllSeverityTrend200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: GetTargetsAllSeverityTrend200ApplicationJsonResults;

  @SpeakeasyMetadata({ data: "json, name=step" })
  step?: number;
}


export class GetTargetsAllSeverityTrendResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTargetsAllSeverityTrend200ApplicationJSONObject?: GetTargetsAllSeverityTrend200ApplicationJson;
}
