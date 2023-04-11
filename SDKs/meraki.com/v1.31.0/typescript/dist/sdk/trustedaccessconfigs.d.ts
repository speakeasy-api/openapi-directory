import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TrustedAccessConfigs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Trusted Access Configs
     *
     * @remarks
     * List Trusted Access Configs
     */
    getNetworkSmTrustedAccessConfigs(req: operations.GetNetworkSmTrustedAccessConfigsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmTrustedAccessConfigsResponse>;
}
