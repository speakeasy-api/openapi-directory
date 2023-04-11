import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Models {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return metrics for organization's top 10 device models sorted by data usage over given time range
     *
     * @remarks
     * Return metrics for organization's top 10 device models sorted by data usage over given time range. Default unit is megabytes.
     */
    getOrganizationSummaryTopDevicesModelsByUsage(req: operations.GetOrganizationSummaryTopDevicesModelsByUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopDevicesModelsByUsageResponse>;
}
