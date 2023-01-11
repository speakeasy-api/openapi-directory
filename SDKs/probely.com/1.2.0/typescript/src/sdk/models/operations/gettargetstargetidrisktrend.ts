import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTargetsTargetIdRiskTrendPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_id" })
  targetId: string;
}


export class GetTargetsTargetIdRiskTrend200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=0" })
  zero?: Date;

  @SpeakeasyMetadata({ data: "json, name=1" })
  one?: number;
}


export class GetTargetsTargetIdRiskTrendRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetsTargetIdRiskTrendPathParams;
}


export class GetTargetsTargetIdRiskTrendResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: GetTargetsTargetIdRiskTrend200ApplicationJson })
  getTargetsTargetIdRiskTrend200ApplicationJSONObjects?: GetTargetsTargetIdRiskTrend200ApplicationJson[];
}
