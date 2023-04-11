import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Returnpolicy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Batches multiple return policy related calls in a single request.
     */
    contentReturnpolicyCustombatch(req: operations.ContentReturnpolicyCustombatchRequest, security: operations.ContentReturnpolicyCustombatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContentReturnpolicyCustombatchResponse>;
    /**
     * Deletes a return policy for the given Merchant Center account.
     */
    contentReturnpolicyDelete(req: operations.ContentReturnpolicyDeleteRequest, security: operations.ContentReturnpolicyDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ContentReturnpolicyDeleteResponse>;
    /**
     * Gets a return policy of the Merchant Center account.
     */
    contentReturnpolicyGet(req: operations.ContentReturnpolicyGetRequest, security: operations.ContentReturnpolicyGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentReturnpolicyGetResponse>;
    /**
     * Inserts a return policy for the Merchant Center account.
     */
    contentReturnpolicyInsert(req: operations.ContentReturnpolicyInsertRequest, security: operations.ContentReturnpolicyInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ContentReturnpolicyInsertResponse>;
    /**
     * Lists the return policies of the Merchant Center account.
     */
    contentReturnpolicyList(req: operations.ContentReturnpolicyListRequest, security: operations.ContentReturnpolicyListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentReturnpolicyListResponse>;
}
