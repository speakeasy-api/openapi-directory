import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Information about tags
 */
export declare class Sources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Sources
     *
     * @remarks
     * Source Listings
     */
    getResourcesSourcesJson(req: operations.GetResourcesSourcesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesSourcesJsonResponse>;
    /**
     * Get Source by ID
     *
     * @remarks
     * Information about a specific source.
     */
    getResourcesSourcesIdJson(req: operations.GetResourcesSourcesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesSourcesIdJsonResponse>;
    /**
     * Get MediaItems for Source
     *
     * @remarks
     * MediaItem
     */
    getResourcesSourcesIdSyndicateFormat(req: operations.GetResourcesSourcesIdSyndicateFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesSourcesIdSyndicateFormatResponse>;
}
