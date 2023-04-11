import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Vendor {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of vendors available for the criteria given
     *
     * @remarks
     * Get a list of vendors available for the criteria given
     */
    getAvailableVendors(req: operations.GetAvailableVendorsRequest, config?: AxiosRequestConfig): Promise<operations.GetAvailableVendorsResponse>;
}
