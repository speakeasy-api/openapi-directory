import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Inappproducts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an in-app product for an app.
     */
    androidpublisherInappproductsDelete(req: operations.AndroidpublisherInappproductsDeleteRequest, security: operations.AndroidpublisherInappproductsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsDeleteResponse>;
    /**
     * Returns information about the in-app product specified.
     */
    androidpublisherInappproductsGet(req: operations.AndroidpublisherInappproductsGetRequest, security: operations.AndroidpublisherInappproductsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsGetResponse>;
    /**
     * Creates a new in-app product for an app.
     */
    androidpublisherInappproductsInsert(req: operations.AndroidpublisherInappproductsInsertRequest, security: operations.AndroidpublisherInappproductsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsInsertResponse>;
    /**
     * List all the in-app products for an Android app, both subscriptions and managed in-app products..
     */
    androidpublisherInappproductsList(req: operations.AndroidpublisherInappproductsListRequest, security: operations.AndroidpublisherInappproductsListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsListResponse>;
    /**
     * Updates the details of an in-app product. This method supports patch semantics.
     */
    androidpublisherInappproductsPatch(req: operations.AndroidpublisherInappproductsPatchRequest, security: operations.AndroidpublisherInappproductsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsPatchResponse>;
    /**
     * Updates the details of an in-app product.
     */
    androidpublisherInappproductsUpdate(req: operations.AndroidpublisherInappproductsUpdateRequest, security: operations.AndroidpublisherInappproductsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsUpdateResponse>;
}
