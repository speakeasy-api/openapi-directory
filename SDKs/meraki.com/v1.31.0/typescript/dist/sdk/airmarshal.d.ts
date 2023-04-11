import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AirMarshal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Air Marshal scan results from a network
     *
     * @remarks
     * List Air Marshal scan results from a network
     */
    getNetworkWirelessAirMarshal(req: operations.GetNetworkWirelessAirMarshalRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessAirMarshalResponse>;
}
