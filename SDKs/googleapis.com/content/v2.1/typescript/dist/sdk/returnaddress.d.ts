import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Returnaddress {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Batches multiple return address related calls in a single request.
     */
    contentReturnaddressCustombatch(req: operations.ContentReturnaddressCustombatchRequest, security: operations.ContentReturnaddressCustombatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContentReturnaddressCustombatchResponse>;
    /**
     * Deletes a return address for the given Merchant Center account.
     */
    contentReturnaddressDelete(req: operations.ContentReturnaddressDeleteRequest, security: operations.ContentReturnaddressDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ContentReturnaddressDeleteResponse>;
    /**
     * Gets a return address of the Merchant Center account.
     */
    contentReturnaddressGet(req: operations.ContentReturnaddressGetRequest, security: operations.ContentReturnaddressGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentReturnaddressGetResponse>;
    /**
     * Inserts a return address for the Merchant Center account.
     */
    contentReturnaddressInsert(req: operations.ContentReturnaddressInsertRequest, security: operations.ContentReturnaddressInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ContentReturnaddressInsertResponse>;
    /**
     * Lists the return addresses of the Merchant Center account.
     */
    contentReturnaddressList(req: operations.ContentReturnaddressListRequest, security: operations.ContentReturnaddressListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentReturnaddressListResponse>;
}
