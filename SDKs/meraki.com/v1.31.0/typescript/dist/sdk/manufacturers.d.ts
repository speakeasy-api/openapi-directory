import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Manufacturers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
     *
     * @remarks
     * Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
     */
    getOrganizationSummaryTopClientsManufacturersByUsage(req: operations.GetOrganizationSummaryTopClientsManufacturersByUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopClientsManufacturersByUsageResponse>;
}
