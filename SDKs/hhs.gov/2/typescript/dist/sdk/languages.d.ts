import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Information about languages
 */
export declare class Languages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Languages
     *
     * @remarks
     * Language Listings
     */
    getResourcesLanguagesJson(req: operations.GetResourcesLanguagesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesLanguagesJsonResponse>;
    /**
     * Get Language by ID
     *
     * @remarks
     * Information about a specific language
     */
    getResourcesLanguagesIdJson(req: operations.GetResourcesLanguagesIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesLanguagesIdJsonResponse>;
}
