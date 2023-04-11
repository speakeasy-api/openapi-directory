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
     * Deletes a page by blog id and page id.
     */
    bloggerPagesDelete(req: operations.BloggerPagesDeleteRequest, security: operations.BloggerPagesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPagesDeleteResponse>;
    /**
     * Gets a page by blog id and page id.
     */
    bloggerPagesGet(req: operations.BloggerPagesGetRequest, security: operations.BloggerPagesGetSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPagesGetResponse>;
    /**
     * Inserts a page.
     */
    bloggerPagesInsert(req: operations.BloggerPagesInsertRequest, security: operations.BloggerPagesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPagesInsertResponse>;
    /**
     * Lists pages.
     */
    bloggerPagesList(req: operations.BloggerPagesListRequest, security: operations.BloggerPagesListSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPagesListResponse>;
    /**
     * Patches a page.
     */
    bloggerPagesPatch(req: operations.BloggerPagesPatchRequest, security: operations.BloggerPagesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPagesPatchResponse>;
    /**
     * Publishes a page.
     */
    bloggerPagesPublish(req: operations.BloggerPagesPublishRequest, security: operations.BloggerPagesPublishSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPagesPublishResponse>;
    /**
     * Reverts a published or scheduled page to draft state.
     */
    bloggerPagesRevert(req: operations.BloggerPagesRevertRequest, security: operations.BloggerPagesRevertSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPagesRevertResponse>;
    /**
     * Updates a page by blog id and page id.
     */
    bloggerPagesUpdate(req: operations.BloggerPagesUpdateRequest, security: operations.BloggerPagesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerPagesUpdateResponse>;
}
