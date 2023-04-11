import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkInsightApplicationHealthByTimeRequest extends SpeakeasyBase {
    applicationId: string;
    networkId: string;
    /**
     * The time resolution in seconds for returned data. The valid resolutions are: 60, 300, 3600, 86400. The default is 300.
     */
    resolution?: number;
    /**
     * The beginning of the timespan for the data. The maximum lookback period is 7 days from today.
     */
    t0?: string;
    /**
     * The end of the timespan for the data. t1 can be a maximum of 7 days after t0.
     */
    t1?: string;
    /**
     * The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 2 hours.
     */
    timespan?: number;
}
export declare class GetNetworkInsightApplicationHealthByTime200ApplicationJSON extends SpeakeasyBase {
    /**
     * The end time of the query range
     */
    endTs?: Date;
    /**
     * LAN goodput (Number of useful information bits delivered over a LAN per unit of time)
     */
    lanGoodput?: number;
    /**
     * LAN latency in milliseconds
     */
    lanLatencyMs?: number;
    /**
     * LAN loss percentage
     */
    lanLossPercent?: number;
    /**
     * Number of clients
     */
    numClients?: number;
    /**
     * Received kilobytes-per-second
     */
    recv?: number;
    /**
     * Duration of the response, in milliseconds
     */
    responseDuration?: number;
    /**
     * Sent kilobytes-per-second
     */
    sent?: number;
    /**
     * The start time of the query range
     */
    startTs?: Date;
    /**
     * WAN goodput (Number of useful information bits delivered over a WAN per unit of time)
     */
    wanGoodput?: number;
    /**
     * WAN latency in milliseconds
     */
    wanLatencyMs?: number;
    /**
     * WAN loss percentage
     */
    wanLossPercent?: number;
}
export declare class GetNetworkInsightApplicationHealthByTimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkInsightApplicationHealthByTime200ApplicationJSONObjects?: GetNetworkInsightApplicationHealthByTime200ApplicationJSON[];
}
