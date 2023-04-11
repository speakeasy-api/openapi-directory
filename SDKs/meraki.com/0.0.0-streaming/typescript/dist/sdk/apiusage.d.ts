import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class APIUsage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the API requests made by an organization
     *
     * @remarks
     * List the API requests made by an organization
     */
    getOrganizationApiRequests(req: operations.GetOrganizationApiRequestsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApiRequestsResponse>;
    /**
     * Return an aggregated overview of API requests data
     *
     * @remarks
     * Return an aggregated overview of API requests data
     */
    getOrganizationApiRequestsOverview(req: operations.GetOrganizationApiRequestsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApiRequestsOverviewResponse>;
}
