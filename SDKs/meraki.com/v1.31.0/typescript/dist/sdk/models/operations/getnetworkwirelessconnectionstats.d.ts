import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information.
 */
export declare enum GetNetworkWirelessConnectionStatsBandEnum {
    Two4 = "2.4",
    Five = "5",
    Six = "6"
}
export declare class GetNetworkWirelessConnectionStatsRequest extends SpeakeasyBase {
    /**
     * Filter results by AP Tag
     */
    apTag?: string;
    /**
     * Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information.
     */
    band?: GetNetworkWirelessConnectionStatsBandEnum;
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
/**
 * Successful operation
 */
export declare class GetNetworkWirelessConnectionStats200ApplicationJSON extends SpeakeasyBase {
    /**
     * The number of failed association attempts
     */
    assoc?: number;
    /**
     * The number of failed authentication attempts
     */
    auth?: number;
    /**
     * The number of failed DHCP attempts
     */
    dhcp?: number;
    /**
     * The number of failed DNS attempts
     */
    dns?: number;
    /**
     * The number of successful connection attempts
     */
    success?: number;
}
export declare class GetNetworkWirelessConnectionStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkWirelessConnectionStats200ApplicationJSONObject?: GetNetworkWirelessConnectionStats200ApplicationJSON;
}
