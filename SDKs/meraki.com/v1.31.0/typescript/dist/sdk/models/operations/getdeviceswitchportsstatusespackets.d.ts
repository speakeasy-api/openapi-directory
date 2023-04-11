import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceSwitchPortsStatusesPacketsRequest extends SpeakeasyBase {
    serial: string;
    /**
     * The beginning of the timespan for the data. The maximum lookback period is 1 day from today.
     */
    t0?: string;
    /**
     * The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 1 day. The default is 1 day.
     */
    timespan?: number;
}
export declare class GetDeviceSwitchPortsStatusesPacketsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceSwitchPortsStatusesPackets200ApplicationJSONObjects?: Record<string, any>[];
}
