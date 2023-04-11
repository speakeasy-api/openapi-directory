import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ContentFiltering {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the content filtering settings for an MX network
     *
     * @remarks
     * Return the content filtering settings for an MX network
     */
    getNetworkApplianceContentFiltering(req: operations.GetNetworkApplianceContentFilteringRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceContentFilteringResponse>;
    /**
     * List all available content filtering categories for an MX network
     *
     * @remarks
     * List all available content filtering categories for an MX network
     */
    getNetworkApplianceContentFilteringCategories(req: operations.GetNetworkApplianceContentFilteringCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceContentFilteringCategoriesResponse>;
    /**
     * Update the content filtering settings for an MX network
     *
     * @remarks
     * Update the content filtering settings for an MX network
     */
    updateNetworkApplianceContentFiltering(req: operations.UpdateNetworkApplianceContentFilteringRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceContentFilteringResponse>;
}
