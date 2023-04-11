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
     * Gets the requested product by id.
     */
    adexchangebuyerProductsGet(req: operations.AdexchangebuyerProductsGetRequest, security: operations.AdexchangebuyerProductsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerProductsGetResponse>;
    /**
     * Gets the requested product.
     */
    adexchangebuyerProductsSearch(req: operations.AdexchangebuyerProductsSearchRequest, security: operations.AdexchangebuyerProductsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.AdexchangebuyerProductsSearchResponse>;
}
