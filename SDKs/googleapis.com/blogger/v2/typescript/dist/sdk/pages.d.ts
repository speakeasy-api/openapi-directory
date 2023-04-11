import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Pages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a page by blog id and page id.
     */
    bloggerPagesGet(req: operations.BloggerPagesGetRequest, security: operations.BloggerPagesGetSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPagesGetResponse>;
    /**
     * Lists pages.
     */
    bloggerPagesList(req: operations.BloggerPagesListRequest, security: operations.BloggerPagesListSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPagesListResponse>;
}
