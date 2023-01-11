import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTargetsAllRiskTrend200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=0" })
  zero?: Date;

  @SpeakeasyMetadata({ data: "json, name=1" })
  one?: number;
}


export class GetTargetsAllRiskTrendResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: GetTargetsAllRiskTrend200ApplicationJson })
  getTargetsAllRiskTrend200ApplicationJSONObjects?: GetTargetsAllRiskTrend200ApplicationJson[];
}
