import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Collections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Uploads a collection to your Merchant Center account. If a collection with the same collectionId already exists, this method updates that entry. In each update, the collection is completely replaced by the fields in the body of the update request.
     */
    contentCollectionsCreate(req: operations.ContentCollectionsCreateRequest, security: operations.ContentCollectionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ContentCollectionsCreateResponse>;
    /**
     * Deletes a collection from your Merchant Center account.
     */
    contentCollectionsDelete(req: operations.ContentCollectionsDeleteRequest, security: operations.ContentCollectionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ContentCollectionsDeleteResponse>;
    /**
     * Retrieves a collection from your Merchant Center account.
     */
    contentCollectionsGet(req: operations.ContentCollectionsGetRequest, security: operations.ContentCollectionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentCollectionsGetResponse>;
    /**
     * Lists the collections in your Merchant Center account. The response might contain fewer items than specified by page_size. Rely on next_page_token to determine if there are more items to be requested.
     */
    contentCollectionsList(req: operations.ContentCollectionsListRequest, security: operations.ContentCollectionsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentCollectionsListResponse>;
}
