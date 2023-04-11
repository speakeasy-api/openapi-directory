import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, cellular. Default will return all uplinks.
 */
export declare enum GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum {
    Cellular = "cellular",
    Wan1 = "wan1",
    Wan2 = "wan2"
}
export declare class GetOrganizationDevicesUplinksLossAndLatencyRequest extends SpeakeasyBase {
    /**
     * Optional filter for a specific destination IP. Default will return all destination IPs.
     */
    ip?: string;
    organizationId: string;
    /**
     * The beginning of the timespan for the data. The maximum lookback period is 60 days from today.
     */
    t0?: string;
    /**
     * The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into the past.
     */
    t1?: string;
    /**
     * The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 5 minutes. The default is 5 minutes.
     */
    timespan?: number;
    /**
     * Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, cellular. Default will return all uplinks.
     */
    uplink?: GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum;
}
export declare class GetOrganizationDevicesUplinksLossAndLatency200ApplicationJSONTimeSeries extends SpeakeasyBase {
    /**
     * Latency in milliseconds
     */
    latencyMs?: number;
    /**
     * Loss percentage
     */
    lossPercent?: number;
    /**
     * Timestamp for this data point
     */
    ts?: Date;
}
export declare class GetOrganizationDevicesUplinksLossAndLatency200ApplicationJSON extends SpeakeasyBase {
    /**
     * IP address of uplink
     */
    ip?: string;
    /**
     * Network ID
     */
    networkId?: string;
    /**
     * Serial of MX device
     */
    serial?: string;
    /**
     * Loss and latency timeseries data
     */
    timeSeries?: GetOrganizationDevicesUplinksLossAndLatency200ApplicationJSONTimeSeries[];
    /**
     * Uplink interface (wan1, wan2, or cellular)
     */
    uplink?: string;
}
export declare class GetOrganizationDevicesUplinksLossAndLatencyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationDevicesUplinksLossAndLatency200ApplicationJSONObjects?: GetOrganizationDevicesUplinksLossAndLatency200ApplicationJSON[];
}
