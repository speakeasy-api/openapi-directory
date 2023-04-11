import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FailedConnections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List of all failed client connection events on this network in a given time range
     *
     * @remarks
     * List of all failed client connection events on this network in a given time range
     */
    getNetworkWirelessFailedConnections(req: operations.GetNetworkWirelessFailedConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessFailedConnectionsResponse>;
}
