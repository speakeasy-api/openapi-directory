import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Pos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Batches multiple POS-related calls in a single request.
     */
    contentPosCustombatch(req: operations.ContentPosCustombatchRequest, security: operations.ContentPosCustombatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContentPosCustombatchResponse>;
    /**
     * Deletes a store for the given merchant.
     */
    contentPosDelete(req: operations.ContentPosDeleteRequest, security: operations.ContentPosDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ContentPosDeleteResponse>;
    /**
     * Retrieves information about the given store.
     */
    contentPosGet(req: operations.ContentPosGetRequest, security: operations.ContentPosGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentPosGetResponse>;
    /**
     * Creates a store for the given merchant.
     */
    contentPosInsert(req: operations.ContentPosInsertRequest, security: operations.ContentPosInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ContentPosInsertResponse>;
    /**
     * Submit inventory for the given merchant.
     */
    contentPosInventory(req: operations.ContentPosInventoryRequest, security: operations.ContentPosInventorySecurity, config?: AxiosRequestConfig): Promise<operations.ContentPosInventoryResponse>;
    /**
     * Lists the stores of the target merchant.
     */
    contentPosList(req: operations.ContentPosListRequest, security: operations.ContentPosListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentPosListResponse>;
    /**
     * Submit a sale event for the given merchant.
     */
    contentPosSale(req: operations.ContentPosSaleRequest, security: operations.ContentPosSaleSecurity, config?: AxiosRequestConfig): Promise<operations.ContentPosSaleResponse>;
}
