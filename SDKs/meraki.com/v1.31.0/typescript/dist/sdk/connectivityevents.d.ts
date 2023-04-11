import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ConnectivityEvents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the wireless connectivity events for a client within a network in the timespan.
     *
     * @remarks
     * List the wireless connectivity events for a client within a network in the timespan.
     */
    getNetworkWirelessClientConnectivityEvents(req: operations.GetNetworkWirelessClientConnectivityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientConnectivityEventsResponse>;
}
