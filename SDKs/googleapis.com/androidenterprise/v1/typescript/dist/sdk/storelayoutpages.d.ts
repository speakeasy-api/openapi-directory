import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Storelayoutpages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a store page.
     */
    androidenterpriseStorelayoutpagesDelete(req: operations.AndroidenterpriseStorelayoutpagesDeleteRequest, security: operations.AndroidenterpriseStorelayoutpagesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseStorelayoutpagesDeleteResponse>;
    /**
     * Retrieves details of a store page.
     */
    androidenterpriseStorelayoutpagesGet(req: operations.AndroidenterpriseStorelayoutpagesGetRequest, security: operations.AndroidenterpriseStorelayoutpagesGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseStorelayoutpagesGetResponse>;
    /**
     * Inserts a new store page.
     */
    androidenterpriseStorelayoutpagesInsert(req: operations.AndroidenterpriseStorelayoutpagesInsertRequest, security: operations.AndroidenterpriseStorelayoutpagesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseStorelayoutpagesInsertResponse>;
    /**
     * Retrieves the details of all pages in the store.
     */
    androidenterpriseStorelayoutpagesList(req: operations.AndroidenterpriseStorelayoutpagesListRequest, security: operations.AndroidenterpriseStorelayoutpagesListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseStorelayoutpagesListResponse>;
    /**
     * Updates the content of a store page.
     */
    androidenterpriseStorelayoutpagesUpdate(req: operations.AndroidenterpriseStorelayoutpagesUpdateRequest, security: operations.AndroidenterpriseStorelayoutpagesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidenterpriseStorelayoutpagesUpdateResponse>;
}
