import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Applications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get application health by time
     *
     * @remarks
     * Get application health by time
     */
    getNetworkInsightApplicationHealthByTime(req: operations.GetNetworkInsightApplicationHealthByTimeRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkInsightApplicationHealthByTimeResponse>;
    /**
     * List all Insight tracked applications
     *
     * @remarks
     * List all Insight tracked applications
     */
    getOrganizationInsightApplications(req: operations.GetOrganizationInsightApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInsightApplicationsResponse>;
}
