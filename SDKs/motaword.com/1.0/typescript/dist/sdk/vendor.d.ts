import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Vendor {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAvailableVendors - Get a list of vendors available for the criteria given
     *
     * Get a list of vendors available for the criteria given
    **/
    getAvailableVendors(req: operations.GetAvailableVendorsRequest, config?: AxiosRequestConfig): Promise<operations.GetAvailableVendorsResponse>;
}
