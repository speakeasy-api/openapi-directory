import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Filter the data by device type: 'combined', 'wireless', 'switch' or 'appliance'. Defaults to 'combined'. When using 'combined', for each rule the data will come from the device type with the most usage.
 */
export declare enum GetNetworkTrafficDeviceTypeEnum {
    Appliance = "appliance",
    Combined = "combined",
    Switch = "switch",
    Wireless = "wireless"
}
export declare class GetNetworkTrafficRequest extends SpeakeasyBase {
    /**
     * Filter the data by device type: 'combined', 'wireless', 'switch' or 'appliance'. Defaults to 'combined'. When using 'combined', for each rule the data will come from the device type with the most usage.
     */
    deviceType?: GetNetworkTrafficDeviceTypeEnum;
    networkId: string;
    /**
     * The beginning of the timespan for the data. The maximum lookback period is 30 days from today.
     */
    t0?: string;
    /**
     * The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 30 days.
     */
    timespan?: number;
}
export declare class GetNetworkTrafficResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkTraffic200ApplicationJSONObjects?: Record<string, any>[];
}
