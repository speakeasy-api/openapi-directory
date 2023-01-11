import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTargetsTargetIdSeverityTrendPathParams extends SpeakeasyBase {
    targetId: string;
}
export declare class GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsHigh extends SpeakeasyBase {
    zero?: Date;
    one?: number;
}
export declare class GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsLow extends SpeakeasyBase {
    zero?: Date;
    one?: number;
}
export declare class GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsMedium extends SpeakeasyBase {
    zero?: Date;
    one?: number;
}
export declare class GetTargetsTargetIdSeverityTrend200ApplicationJsonResults extends SpeakeasyBase {
    high?: GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsHigh[];
    low?: GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsLow[];
    medium?: GetTargetsTargetIdSeverityTrend200ApplicationJsonResultsMedium[];
}
export declare class GetTargetsTargetIdSeverityTrend200ApplicationJson extends SpeakeasyBase {
    results?: GetTargetsTargetIdSeverityTrend200ApplicationJsonResults;
    step?: number;
}
export declare class GetTargetsTargetIdSeverityTrendRequest extends SpeakeasyBase {
    pathParams: GetTargetsTargetIdSeverityTrendPathParams;
}
export declare class GetTargetsTargetIdSeverityTrendResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsTargetIdSeverityTrend200ApplicationJSONObject?: GetTargetsTargetIdSeverityTrend200ApplicationJson;
}
