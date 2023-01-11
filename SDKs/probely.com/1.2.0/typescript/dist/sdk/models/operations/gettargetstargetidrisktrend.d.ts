import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTargetsTargetIdRiskTrendPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class GetTargetsTargetIdRiskTrend200ApplicationJson extends SpeakeasyBase {
    zero?: Date;
    one?: number;
}
export declare class GetTargetsTargetIdRiskTrendRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdRiskTrendPathParams;
}
export declare class GetTargetsTargetIdRiskTrendResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsTargetIdRiskTrend200ApplicationJSONObjects?: GetTargetsTargetIdRiskTrend200ApplicationJson[];
}
