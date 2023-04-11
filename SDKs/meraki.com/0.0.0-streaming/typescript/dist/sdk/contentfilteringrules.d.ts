import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ContentFilteringRules {
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
    getNetworkContentFiltering(req: operations.GetNetworkContentFilteringRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkContentFilteringResponse>;
    /**
     * Update the content filtering settings for an MX network
     *
     * @remarks
     * Update the content filtering settings for an MX network
     */
    updateNetworkContentFiltering(req: operations.UpdateNetworkContentFilteringRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkContentFilteringResponse>;
}
