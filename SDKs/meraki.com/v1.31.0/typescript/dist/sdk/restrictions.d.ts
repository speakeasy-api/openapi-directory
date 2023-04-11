import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Restrictions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the restrictions on a device
     *
     * @remarks
     * List the restrictions on a device
     */
    getNetworkSmDeviceRestrictions(req: operations.GetNetworkSmDeviceRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceRestrictionsResponse>;
}
