import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The WAN uplink used to obtain the requested stats. Valid uplinks are wan1, wan2, cellular. The default is wan1.
 */
export declare enum GetNetworkDeviceLossAndLatencyHistoryUplinkEnum {
    Cellular = "cellular",
    Wan1 = "wan1",
    Wan2 = "wan2"
}
export declare class GetNetworkDeviceLossAndLatencyHistoryRequest extends SpeakeasyBase {
    /**
     * The destination IP used to obtain the requested stats. This is required.
     */
    ip: string;
    networkId: string;
    /**
     * The time resolution in seconds for returned data. The valid resolutions are: 60, 600, 3600, 86400. The default is 60.
     */
    resolution?: number;
    serial: string;
    /**
     * The beginning of the timespan for the data. The maximum lookback period is 60 days from today.
     */
    t0?: string;
    /**
     * The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
     */
    t1?: string;
    /**
     * The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
     */
    timespan?: number;
    /**
     * The WAN uplink used to obtain the requested stats. Valid uplinks are wan1, wan2, cellular. The default is wan1.
     */
    uplink?: GetNetworkDeviceLossAndLatencyHistoryUplinkEnum;
}
export declare class GetNetworkDeviceLossAndLatencyHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkDeviceLossAndLatencyHistory200ApplicationJSONObjects?: Record<string, any>[];
}
