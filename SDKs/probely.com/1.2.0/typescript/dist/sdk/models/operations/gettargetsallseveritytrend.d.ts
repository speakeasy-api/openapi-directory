import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTargetsAllSeverityTrend200ApplicationJSONResultsHigh extends SpeakeasyBase {
    /**
     * Date time
     */
    zero?: Date;
    /**
     * Risk score
     */
    one?: number;
}
export declare class GetTargetsAllSeverityTrend200ApplicationJSONResultsLow extends SpeakeasyBase {
    /**
     * Date time
     */
    zero?: Date;
    /**
     * Risk score
     */
    one?: number;
}
export declare class GetTargetsAllSeverityTrend200ApplicationJSONResultsMedium extends SpeakeasyBase {
    /**
     * Date time
     */
    zero?: Date;
    /**
     * Risk score
     */
    one?: number;
}
export declare class GetTargetsAllSeverityTrend200ApplicationJSONResults extends SpeakeasyBase {
    high?: GetTargetsAllSeverityTrend200ApplicationJSONResultsHigh[];
    low?: GetTargetsAllSeverityTrend200ApplicationJSONResultsLow[];
    medium?: GetTargetsAllSeverityTrend200ApplicationJSONResultsMedium[];
}
/**
 * Severity trend plot data
 */
export declare class GetTargetsAllSeverityTrend200ApplicationJSON extends SpeakeasyBase {
    results?: GetTargetsAllSeverityTrend200ApplicationJSONResults;
    step?: number;
}
export declare class GetTargetsAllSeverityTrendResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Severity trend plot data
     */
    getTargetsAllSeverityTrend200ApplicationJSONObject?: GetTargetsAllSeverityTrend200ApplicationJSON;
}
