import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information.
 */
export declare enum GetNetworkWirelessDevicesConnectionStatsBandEnum {
    Two4 = "2.4",
    Five = "5",
    Six = "6"
}
export declare class GetNetworkWirelessDevicesConnectionStatsRequest extends SpeakeasyBase {
    /**
     * Filter results by AP Tag
     */
    apTag?: string;
    /**
     * Filter results by band (either '2.4', '5' or '6'). Note that data prior to February 2020 will not have band information.
     */
    band?: GetNetworkWirelessDevicesConnectionStatsBandEnum;
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
 * The connection stats of the device
 */
export declare class GetNetworkWirelessDevicesConnectionStats200ApplicationJSONConnectionStats extends SpeakeasyBase {
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
export declare class GetNetworkWirelessDevicesConnectionStats200ApplicationJSON extends SpeakeasyBase {
    /**
     * The connection stats of the device
     */
    connectionStats?: GetNetworkWirelessDevicesConnectionStats200ApplicationJSONConnectionStats;
    /**
     * The serial number for the device
     */
    serial?: string;
}
export declare class GetNetworkWirelessDevicesConnectionStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkWirelessDevicesConnectionStats200ApplicationJSONObjects?: GetNetworkWirelessDevicesConnectionStats200ApplicationJSON[];
}
