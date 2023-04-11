import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class WlanLists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the saved SSID names on a device
     *
     * @remarks
     * List the saved SSID names on a device
     */
    getNetworkSmDeviceWlanLists(req: operations.GetNetworkSmDeviceWlanListsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceWlanListsResponse>;
}
