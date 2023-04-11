import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkClientLatencyHistoryRequest extends SpeakeasyBase {
    clientId: string;
    networkId: string;
    /**
     * The time resolution in seconds for returned data. The valid resolutions are: 86400. The default is 86400.
     */
    resolution?: number;
    /**
     * The beginning of the timespan for the data. The maximum lookback period is 791 days from today.
     */
    t0?: string;
    /**
     * The end of the timespan for the data. t1 can be a maximum of 791 days after t0.
     */
    t1?: string;
    /**
     * The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 1 day.
     */
    timespan?: number;
}
export declare class GetNetworkClientLatencyHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkClientLatencyHistory200ApplicationJSONObjects?: Record<string, any>[];
}
