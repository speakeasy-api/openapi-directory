import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Certs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the certs on a device
     *
     * @remarks
     * List the certs on a device
     */
    getNetworkSmDeviceCerts(req: operations.GetNetworkSmDeviceCertsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceCertsResponse>;
}
