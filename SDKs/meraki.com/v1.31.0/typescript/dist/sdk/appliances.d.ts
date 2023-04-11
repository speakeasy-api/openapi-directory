import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Appliances {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the top 10 appliances sorted by utilization over given time range.
     *
     * @remarks
     * Return the top 10 appliances sorted by utilization over given time range.
     */
    getOrganizationSummaryTopAppliancesByUtilization(req: operations.GetOrganizationSummaryTopAppliancesByUtilizationRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopAppliancesByUtilizationResponse>;
}
