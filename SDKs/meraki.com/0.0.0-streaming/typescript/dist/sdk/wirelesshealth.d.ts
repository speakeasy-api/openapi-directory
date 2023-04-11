import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class WirelessHealth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Aggregated connectivity info for a given client on this network
     *
     * @remarks
     * Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.
     */
    getNetworkClientConnectionStats(req: operations.GetNetworkClientConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientConnectionStatsResponse>;
    /**
     * Aggregated latency info for a given client on this network
     *
     * @remarks
     * Aggregated latency info for a given client on this network. Clients are identified by their MAC.
     */
    getNetworkClientLatencyStats(req: operations.GetNetworkClientLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientLatencyStatsResponse>;
    /**
     * Aggregated connectivity info for this network, grouped by clients
     *
     * @remarks
     * Aggregated connectivity info for this network, grouped by clients
     */
    getNetworkClientsConnectionStats(req: operations.GetNetworkClientsConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsConnectionStatsResponse>;
    /**
     * Aggregated latency info for this network, grouped by clients
     *
     * @remarks
     * Aggregated latency info for this network, grouped by clients
     */
    getNetworkClientsLatencyStats(req: operations.GetNetworkClientsLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsLatencyStatsResponse>;
    /**
     * Aggregated connectivity info for this network
     *
     * @remarks
     * Aggregated connectivity info for this network
     */
    getNetworkConnectionStats(req: operations.GetNetworkConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkConnectionStatsResponse>;
    /**
     * Aggregated connectivity info for a given AP on this network
     *
     * @remarks
     * Aggregated connectivity info for a given AP on this network
     */
    getNetworkDeviceConnectionStats(req: operations.GetNetworkDeviceConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkDeviceConnectionStatsResponse>;
    /**
     * Aggregated latency info for a given AP on this network
     *
     * @remarks
     * Aggregated latency info for a given AP on this network
     */
    getNetworkDeviceLatencyStats(req: operations.GetNetworkDeviceLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkDeviceLatencyStatsResponse>;
    /**
     * Aggregated connectivity info for this network, grouped by node
     *
     * @remarks
     * Aggregated connectivity info for this network, grouped by node
     */
    getNetworkDevicesConnectionStats(req: operations.GetNetworkDevicesConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkDevicesConnectionStatsResponse>;
    /**
     * Aggregated latency info for this network, grouped by node
     *
     * @remarks
     * Aggregated latency info for this network, grouped by node
     */
    getNetworkDevicesLatencyStats(req: operations.GetNetworkDevicesLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkDevicesLatencyStatsResponse>;
    /**
     * List of all failed client connection events on this network in a given time range
     *
     * @remarks
     * List of all failed client connection events on this network in a given time range
     */
    getNetworkFailedConnections(req: operations.GetNetworkFailedConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFailedConnectionsResponse>;
    /**
     * Aggregated latency info for this network
     *
     * @remarks
     * Aggregated latency info for this network
     */
    getNetworkLatencyStats(req: operations.GetNetworkLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkLatencyStatsResponse>;
}
