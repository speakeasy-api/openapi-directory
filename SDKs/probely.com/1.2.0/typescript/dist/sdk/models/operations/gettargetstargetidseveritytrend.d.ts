import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTargetsTargetIdSeverityTrendRequest extends SpeakeasyBase {
    /**
     * Target id
     */
    targetId: string;
}
export declare class GetTargetsTargetIdSeverityTrend200ApplicationJSONResultsHigh extends SpeakeasyBase {
    /**
     * Date time
     */
    zero?: Date;
    /**
     * Risk score
     */
    one?: number;
}
export declare class GetTargetsTargetIdSeverityTrend200ApplicationJSONResultsLow extends SpeakeasyBase {
    /**
     * Date time
     */
    zero?: Date;
    /**
     * Risk score
     */
    one?: number;
}
export declare class GetTargetsTargetIdSeverityTrend200ApplicationJSONResultsMedium extends SpeakeasyBase {
    /**
     * Date time
     */
    zero?: Date;
    /**
     * Risk score
     */
    one?: number;
}
export declare class GetTargetsTargetIdSeverityTrend200ApplicationJSONResults extends SpeakeasyBase {
    high?: GetTargetsTargetIdSeverityTrend200ApplicationJSONResultsHigh[];
    low?: GetTargetsTargetIdSeverityTrend200ApplicationJSONResultsLow[];
    medium?: GetTargetsTargetIdSeverityTrend200ApplicationJSONResultsMedium[];
}
/**
 * Severity trend plot data
 */
export declare class GetTargetsTargetIdSeverityTrend200ApplicationJSON extends SpeakeasyBase {
    results?: GetTargetsTargetIdSeverityTrend200ApplicationJSONResults;
    step?: number;
}
export declare class GetTargetsTargetIdSeverityTrendResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Severity trend plot data
     */
    getTargetsTargetIdSeverityTrend200ApplicationJSONObject?: GetTargetsTargetIdSeverityTrend200ApplicationJSON;
}
