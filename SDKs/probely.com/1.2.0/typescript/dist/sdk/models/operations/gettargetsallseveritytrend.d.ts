import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTargetsAllSeverityTrend200ApplicationJsonResultsHigh extends SpeakeasyBase {
    zero?: Date;
    one?: number;
}
export declare class GetTargetsAllSeverityTrend200ApplicationJsonResultsLow extends SpeakeasyBase {
    zero?: Date;
    one?: number;
}
export declare class GetTargetsAllSeverityTrend200ApplicationJsonResultsMedium extends SpeakeasyBase {
    zero?: Date;
    one?: number;
}
export declare class GetTargetsAllSeverityTrend200ApplicationJsonResults extends SpeakeasyBase {
    high?: GetTargetsAllSeverityTrend200ApplicationJsonResultsHigh[];
    low?: GetTargetsAllSeverityTrend200ApplicationJsonResultsLow[];
    medium?: GetTargetsAllSeverityTrend200ApplicationJsonResultsMedium[];
}
export declare class GetTargetsAllSeverityTrend200ApplicationJson extends SpeakeasyBase {
    results?: GetTargetsAllSeverityTrend200ApplicationJsonResults;
    step?: number;
}
export declare class GetTargetsAllSeverityTrendResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTargetsAllSeverityTrend200ApplicationJSONObject?: GetTargetsAllSeverityTrend200ApplicationJson;
}
