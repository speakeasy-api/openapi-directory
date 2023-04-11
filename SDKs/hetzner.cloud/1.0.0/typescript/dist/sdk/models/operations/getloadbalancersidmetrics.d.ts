import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Type of metrics to get
 */
export declare enum GetLoadBalancersIdMetricsTypeEnum {
    OpenConnections = "open_connections",
    ConnectionsPerSecond = "connections_per_second",
    RequestsPerSecond = "requests_per_second",
    Bandwidth = "bandwidth"
}
export declare class GetLoadBalancersIdMetricsRequest extends SpeakeasyBase {
    /**
     * End of period to get Metrics for (in ISO-8601 format)
     */
    end: string;
    /**
     * ID of the Load Balancer
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
    type: GetLoadBalancersIdMetricsTypeEnum;
}
export declare class GetLoadBalancersIdMetrics200ApplicationJSONMetricsTimeSeries extends SpeakeasyBase {
    /**
     * Metrics Timestamps with values
     */
    values: any[][];
}
export declare class GetLoadBalancersIdMetrics200ApplicationJSONMetrics extends SpeakeasyBase {
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
    timeSeries: Record<string, GetLoadBalancersIdMetrics200ApplicationJSONMetricsTimeSeries>;
}
/**
 * The `metrics` key in the reply contains a metrics object with this structure
 */
export declare class GetLoadBalancersIdMetrics200ApplicationJSON extends SpeakeasyBase {
    metrics: GetLoadBalancersIdMetrics200ApplicationJSONMetrics;
}
export declare class GetLoadBalancersIdMetricsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The `metrics` key in the reply contains a metrics object with this structure
     */
    getLoadBalancersIdMetrics200ApplicationJSONObject?: GetLoadBalancersIdMetrics200ApplicationJSON;
}
