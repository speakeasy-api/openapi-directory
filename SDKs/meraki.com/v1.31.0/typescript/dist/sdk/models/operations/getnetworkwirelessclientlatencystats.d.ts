import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information.
 */
export declare enum GetNetworkWirelessClientLatencyStatsBandEnum {
    Two4 = "2.4",
    Five = "5",
    Six = "6"
}
export declare class GetNetworkWirelessClientLatencyStatsRequest extends SpeakeasyBase {
    /**
     * Filter results by AP Tag
     */
    apTag?: string;
    /**
     * Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information.
     */
    band?: GetNetworkWirelessClientLatencyStatsBandEnum;
    clientId: string;
    /**
     * Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string.
     */
    fields?: string;
    networkId: string;
    /**
     * Filter results by SSID
     */
    ssid?: number;
    /**
     * The beginning of the timespan for the data. The maximum lookback period is 180 days from today.
     */
    t0?: string;
    /**
     * The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
     */
    t1?: string;
    /**
     * The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days.
     */
    timespan?: number;
    /**
     * Filter results by VLAN
     */
    vlan?: number;
}
export declare class GetNetworkWirelessClientLatencyStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkWirelessClientLatencyStats200ApplicationJSONObject?: Record<string, any>;
}
