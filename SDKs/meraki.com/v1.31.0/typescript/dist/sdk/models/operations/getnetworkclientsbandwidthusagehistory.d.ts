import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkClientsBandwidthUsageHistoryRequest extends SpeakeasyBase {
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    networkId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
     */
    perPage?: number;
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
    /**
     * The beginning of the timespan for the data. The maximum lookback period is 30 days from today.
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
}
export declare class GetNetworkClientsBandwidthUsageHistoryResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkClientsBandwidthUsageHistory200ApplicationJSONObjects?: Record<string, any>[];
}
