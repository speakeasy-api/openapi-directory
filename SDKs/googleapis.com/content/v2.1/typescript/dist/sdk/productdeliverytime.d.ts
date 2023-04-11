import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Productdeliverytime {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates or updates the delivery time of a product.
     */
    contentProductdeliverytimeCreate(req: operations.ContentProductdeliverytimeCreateRequest, security: operations.ContentProductdeliverytimeCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ContentProductdeliverytimeCreateResponse>;
    /**
     * Deletes the delivery time of a product.
     */
    contentProductdeliverytimeDelete(req: operations.ContentProductdeliverytimeDeleteRequest, security: operations.ContentProductdeliverytimeDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ContentProductdeliverytimeDeleteResponse>;
    /**
     * Gets `productDeliveryTime` by `productId`.
     */
    contentProductdeliverytimeGet(req: operations.ContentProductdeliverytimeGetRequest, security: operations.ContentProductdeliverytimeGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentProductdeliverytimeGetResponse>;
}
