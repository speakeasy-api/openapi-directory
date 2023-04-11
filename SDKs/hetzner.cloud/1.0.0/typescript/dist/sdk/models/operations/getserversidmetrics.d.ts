import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Type of metrics to get
 */
export declare enum GetServersIdMetricsTypeEnum {
    Cpu = "cpu",
    Disk = "disk",
    Network = "network"
}
export declare class GetServersIdMetricsRequest extends SpeakeasyBase {
    /**
     * End of period to get Metrics for (in ISO-8601 format)
     */
    end: string;
    /**
     * ID of the Server
     */
    id: number;
    /**
     * Start of period to get Metrics for (in ISO-8601 format)
     */
    start: string;
    /**
     * Resolution of results in seconds
     */
    step?: string;
    /**
     * Type of metrics to get
     */
    type: GetServersIdMetricsTypeEnum;
}
export declare class GetServersIdMetrics200ApplicationJSONMetricsTimeSeries extends SpeakeasyBase {
    /**
     * Metrics Timestamps with values
     */
    values: any[][];
}
export declare class GetServersIdMetrics200ApplicationJSONMetrics extends SpeakeasyBase {
    /**
     * End of period of metrics reported (in ISO-8601 format)
     */
    end: string;
    /**
     * Start of period of metrics reported (in ISO-8601 format)
     */
    start: string;
    /**
     * Resolution of results in seconds.
     */
    step: number;
    /**
     * Hash with timeseries information, containing the name of timeseries as key
     */
    timeSeries: Record<string, GetServersIdMetrics200ApplicationJSONMetricsTimeSeries>;
}
/**
 * The `metrics` key in the reply contains a metrics object with this structure
 */
export declare class GetServersIdMetrics200ApplicationJSON extends SpeakeasyBase {
    metrics: GetServersIdMetrics200ApplicationJSONMetrics;
}
export declare class GetServersIdMetricsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `metrics` key in the reply contains a metrics object with this structure
     */
    getServersIdMetrics200ApplicationJSONObject?: GetServersIdMetrics200ApplicationJSON;
}
