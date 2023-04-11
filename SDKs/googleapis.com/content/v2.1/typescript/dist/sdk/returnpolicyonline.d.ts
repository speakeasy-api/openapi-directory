import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Returnpolicyonline {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new return policy.
     */
    contentReturnpolicyonlineCreate(req: operations.ContentReturnpolicyonlineCreateRequest, security: operations.ContentReturnpolicyonlineCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ContentReturnpolicyonlineCreateResponse>;
    /**
     * Deletes an existing return policy.
     */
    contentReturnpolicyonlineDelete(req: operations.ContentReturnpolicyonlineDeleteRequest, security: operations.ContentReturnpolicyonlineDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ContentReturnpolicyonlineDeleteResponse>;
    /**
     * Gets an existing return policy.
     */
    contentReturnpolicyonlineGet(req: operations.ContentReturnpolicyonlineGetRequest, security: operations.ContentReturnpolicyonlineGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentReturnpolicyonlineGetResponse>;
    /**
     * Lists all existing return policies.
     */
    contentReturnpolicyonlineList(req: operations.ContentReturnpolicyonlineListRequest, security: operations.ContentReturnpolicyonlineListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentReturnpolicyonlineListResponse>;
    /**
     * Updates an existing return policy.
     */
    contentReturnpolicyonlinePatch(req: operations.ContentReturnpolicyonlinePatchRequest, security: operations.ContentReturnpolicyonlinePatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContentReturnpolicyonlinePatchResponse>;
}
