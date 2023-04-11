import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Access Qshow - quote collection service. Create curated quotes collection. You can group quotes by any way you want and access them as a single unit. You need an API key to access this service.
 */
export declare class Qshow {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a qshow.
     *
     */
    deleteQshow(req: operations.DeleteQshowRequest, security: operations.DeleteQshowSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteQshowResponse>;
    /**
     * Gets a details about a qshow.
     *
     */
    getQshow(req: operations.GetQshowRequest, security: operations.GetQshowSecurity, config?: AxiosRequestConfig): Promise<operations.GetQshowResponse>;
    /**
     * Get the list of Qshows in They Said So platform.
     */
    getQshowList(req: operations.GetQshowListRequest, security: operations.GetQshowListSecurity, config?: AxiosRequestConfig): Promise<operations.GetQshowListResponse>;
    /**
     * Get the quotes in a given Qshow.
     */
    getQshowQuotes(req: operations.GetQshowQuotesRequest, security: operations.GetQshowQuotesSecurity, config?: AxiosRequestConfig): Promise<operations.GetQshowQuotesResponse>;
    /**
     * Update an existing qshow.
     */
    patchQshow(req: operations.PatchQshowRequest, security: operations.PatchQshowSecurity, config?: AxiosRequestConfig): Promise<operations.PatchQshowResponse>;
    /**
     * Add a quote to a given Qshow.
     */
    postQshowQuotesAdd(req: operations.PostQshowQuotesAddRequest, security: operations.PostQshowQuotesAddSecurity, config?: AxiosRequestConfig): Promise<operations.PostQshowQuotesAddResponse>;
    /**
     * Remove a quote to a given Qshow.
     */
    postQshowQuotesRemove(req: operations.PostQshowQuotesRemoveRequest, security: operations.PostQshowQuotesRemoveSecurity, config?: AxiosRequestConfig): Promise<operations.PostQshowQuotesRemoveResponse>;
    /**
     * Create and add a new qshow to your private collection.
     */
    putQshow(req: operations.PutQshowRequest, security: operations.PutQshowSecurity, config?: AxiosRequestConfig): Promise<operations.PutQshowResponse>;
}
