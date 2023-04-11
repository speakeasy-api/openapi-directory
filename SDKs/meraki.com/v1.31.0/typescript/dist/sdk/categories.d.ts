import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Categories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all available content filtering categories for an MX network
     *
     * @remarks
     * List all available content filtering categories for an MX network
     */
    getNetworkApplianceContentFilteringCategories(req: operations.GetNetworkApplianceContentFilteringCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceContentFilteringCategoriesResponse>;
}
