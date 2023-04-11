import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BandwidthUsageHistory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
     *
     * @remarks
     * Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
     */
    getNetworkClientsBandwidthUsageHistory(req: operations.GetNetworkClientsBandwidthUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsBandwidthUsageHistoryResponse>;
    /**
     * Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
     *
     * @remarks
     * Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
     */
    getOrganizationClientsBandwidthUsageHistory(req: operations.GetOrganizationClientsBandwidthUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationClientsBandwidthUsageHistoryResponse>;
}
