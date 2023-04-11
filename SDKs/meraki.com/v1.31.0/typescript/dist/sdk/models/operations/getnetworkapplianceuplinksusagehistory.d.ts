import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkApplianceUplinksUsageHistoryRequest extends SpeakeasyBase {
    networkId: string;
    /**
     * The time resolution in seconds for returned data. The valid resolutions are: 60, 300, 600, 1800, 3600, 86400. The default is 60.
     */
    resolution?: number;
    /**
     * The beginning of the timespan for the data. The maximum lookback period is 365 days from today.
     */
    t0?: string;
    /**
     * The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
     */
    t1?: string;
    /**
     * The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 10 minutes.
     */
    timespan?: number;
}
export declare class GetNetworkApplianceUplinksUsageHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkApplianceUplinksUsageHistory200ApplicationJSONObjects?: Record<string, any>[];
}
