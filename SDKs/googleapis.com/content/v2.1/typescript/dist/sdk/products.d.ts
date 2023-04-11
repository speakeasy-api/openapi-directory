import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Products {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves, inserts, and deletes multiple products in a single request.
     */
    contentProductsCustombatch(req: operations.ContentProductsCustombatchRequest, security: operations.ContentProductsCustombatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContentProductsCustombatchResponse>;
    /**
     * Deletes a product from your Merchant Center account.
     */
    contentProductsDelete(req: operations.ContentProductsDeleteRequest, security: operations.ContentProductsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ContentProductsDeleteResponse>;
    /**
     * Retrieves a product from your Merchant Center account.
     */
    contentProductsGet(req: operations.ContentProductsGetRequest, security: operations.ContentProductsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentProductsGetResponse>;
    /**
     * Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.
     */
    contentProductsInsert(req: operations.ContentProductsInsertRequest, security: operations.ContentProductsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ContentProductsInsertResponse>;
    /**
     * Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.
     */
    contentProductsList(req: operations.ContentProductsListRequest, security: operations.ContentProductsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentProductsListResponse>;
    /**
     * Updates an existing product in your Merchant Center account. Only updates attributes provided in the request.
     */
    contentProductsUpdate(req: operations.ContentProductsUpdateRequest, security: operations.ContentProductsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ContentProductsUpdateResponse>;
}
