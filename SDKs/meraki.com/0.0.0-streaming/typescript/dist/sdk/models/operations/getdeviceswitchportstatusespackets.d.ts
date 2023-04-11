import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceSwitchPortStatusesPacketsRequest extends SpeakeasyBase {
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
export declare class GetDeviceSwitchPortStatusesPacketsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceSwitchPortStatusesPackets200ApplicationJSONObjects?: Record<string, any>[];
}
