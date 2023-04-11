import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class V1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Cancel the specified Subscription
     */
    cancel(req: operations.CancelRequest, config?: AxiosRequestConfig): Promise<operations.CancelResponse>;
    /**
     * Retrieve details for the specified Subscription
     */
    get(req: operations.GetRequest, config?: AxiosRequestConfig): Promise<operations.GetResponse>;
    /**
     * Retrieve a list of Subscriptions for the specified Shopper
     */
    list(req: operations.ListRequest, config?: AxiosRequestConfig): Promise<operations.ListResponse>;
    /**
     * Retrieve a list of ProductGroups for the specified Shopper
     */
    productGroups(req: operations.ProductGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ProductGroupsResponse>;
    /**
     * Update details for the specified Subscription
     *
     * @remarks
     * Only Subscription properties that can be changed without immediate financial impact can be modified via PATCH, whereas some properties can be changed by purchasing a renewal<br/><strong>This endpoint only supports JWT authentication</strong>
     */
    updateForm(req: operations.UpdateFormRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFormResponse>;
    /**
     * Update details for the specified Subscription
     *
     * @remarks
     * Only Subscription properties that can be changed without immediate financial impact can be modified via PATCH, whereas some properties can be changed by purchasing a renewal<br/><strong>This endpoint only supports JWT authentication</strong>
     */
    updateJson(req: operations.UpdateJsonRequest, config?: AxiosRequestConfig): Promise<operations.UpdateJsonResponse>;
    /**
     * Update details for the specified Subscription
     *
     * @remarks
     * Only Subscription properties that can be changed without immediate financial impact can be modified via PATCH, whereas some properties can be changed by purchasing a renewal<br/><strong>This endpoint only supports JWT authentication</strong>
     */
    updateRaw(req: operations.UpdateRawRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRawResponse>;
}
