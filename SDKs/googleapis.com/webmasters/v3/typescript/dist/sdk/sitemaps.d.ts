import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Sitemaps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a sitemap from this site.
     */
    webmastersSitemapsDelete(req: operations.WebmastersSitemapsDeleteRequest, security: operations.WebmastersSitemapsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.WebmastersSitemapsDeleteResponse>;
    /**
     * Retrieves information about a specific sitemap.
     */
    webmastersSitemapsGet(req: operations.WebmastersSitemapsGetRequest, security: operations.WebmastersSitemapsGetSecurity, config?: AxiosRequestConfig): Promise<operations.WebmastersSitemapsGetResponse>;
    /**
     * Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).
     */
    webmastersSitemapsList(req: operations.WebmastersSitemapsListRequest, security: operations.WebmastersSitemapsListSecurity, config?: AxiosRequestConfig): Promise<operations.WebmastersSitemapsListResponse>;
    /**
     * Submits a sitemap for a site.
     */
    webmastersSitemapsSubmit(req: operations.WebmastersSitemapsSubmitRequest, security: operations.WebmastersSitemapsSubmitSecurity, config?: AxiosRequestConfig): Promise<operations.WebmastersSitemapsSubmitResponse>;
}
