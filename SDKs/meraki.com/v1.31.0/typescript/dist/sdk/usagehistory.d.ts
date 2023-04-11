import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UsageHistory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the sent and received bytes for each uplink of a network.
     *
     * @remarks
     * Get the sent and received bytes for each uplink of a network.
     */
    getNetworkApplianceUplinksUsageHistory(req: operations.GetNetworkApplianceUplinksUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceUplinksUsageHistoryResponse>;
    /**
     * Return the client's daily usage history
     *
     * @remarks
     * Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    getNetworkClientUsageHistory(req: operations.GetNetworkClientUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientUsageHistoryResponse>;
    /**
     * Return AP usage over time for a device or network client
     *
     * @remarks
     * Return AP usage over time for a device or network client
     */
    getNetworkWirelessUsageHistory(req: operations.GetNetworkWirelessUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessUsageHistoryResponse>;
}
