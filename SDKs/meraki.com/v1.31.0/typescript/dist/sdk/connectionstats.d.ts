import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ConnectionStats {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Aggregated connectivity info for a given AP on this network
     *
     * @remarks
     * Aggregated connectivity info for a given AP on this network
     */
    getDeviceWirelessConnectionStats(req: operations.GetDeviceWirelessConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessConnectionStatsResponse>;
    /**
     * Aggregated connectivity info for a given client on this network
     *
     * @remarks
     * Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.
     */
    getNetworkWirelessClientConnectionStats(req: operations.GetNetworkWirelessClientConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientConnectionStatsResponse>;
    /**
     * Aggregated connectivity info for this network, grouped by clients
     *
     * @remarks
     * Aggregated connectivity info for this network, grouped by clients
     */
    getNetworkWirelessClientsConnectionStats(req: operations.GetNetworkWirelessClientsConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientsConnectionStatsResponse>;
    /**
     * Aggregated connectivity info for this network
     *
     * @remarks
     * Aggregated connectivity info for this network
     */
    getNetworkWirelessConnectionStats(req: operations.GetNetworkWirelessConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessConnectionStatsResponse>;
    /**
     * Aggregated connectivity info for this network, grouped by node
     *
     * @remarks
     * Aggregated connectivity info for this network, grouped by node
     */
    getNetworkWirelessDevicesConnectionStats(req: operations.GetNetworkWirelessDevicesConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessDevicesConnectionStatsResponse>;
}
