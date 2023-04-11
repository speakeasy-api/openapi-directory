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
     * Lists the Products the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.
     */
    cloudchannelProductsList(req: operations.CloudchannelProductsListRequest, security: operations.CloudchannelProductsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudchannelProductsListResponse>;
    /**
     * Lists the SKUs for a product the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.
     */
    cloudchannelProductsSkusList(req: operations.CloudchannelProductsSkusListRequest, security: operations.CloudchannelProductsSkusListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudchannelProductsSkusListResponse>;
}
