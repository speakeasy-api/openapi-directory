import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class LatencyStats {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Aggregated latency info for a given AP on this network
     *
     * @remarks
     * Aggregated latency info for a given AP on this network
     */
    getDeviceWirelessLatencyStats(req: operations.GetDeviceWirelessLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessLatencyStatsResponse>;
    /**
     * Aggregated latency info for a given client on this network
     *
     * @remarks
     * Aggregated latency info for a given client on this network. Clients are identified by their MAC.
     */
    getNetworkWirelessClientLatencyStats(req: operations.GetNetworkWirelessClientLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientLatencyStatsResponse>;
    /**
     * Aggregated latency info for this network, grouped by clients
     *
     * @remarks
     * Aggregated latency info for this network, grouped by clients
     */
    getNetworkWirelessClientsLatencyStats(req: operations.GetNetworkWirelessClientsLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientsLatencyStatsResponse>;
    /**
     * Aggregated latency info for this network, grouped by node
     *
     * @remarks
     * Aggregated latency info for this network, grouped by node
     */
    getNetworkWirelessDevicesLatencyStats(req: operations.GetNetworkWirelessDevicesLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessDevicesLatencyStatsResponse>;
    /**
     * Aggregated latency info for this network
     *
     * @remarks
     * Aggregated latency info for this network
     */
    getNetworkWirelessLatencyStats(req: operations.GetNetworkWirelessLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessLatencyStatsResponse>;
}
