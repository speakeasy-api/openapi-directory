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
     * Deletes an in-app product (i.e. a managed product or a subscriptions).
     */
    androidpublisherInappproductsDelete(req: operations.AndroidpublisherInappproductsDeleteRequest, security: operations.AndroidpublisherInappproductsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsDeleteResponse>;
    /**
     * Gets an in-app product, which can be a managed product or a subscription.
     */
    androidpublisherInappproductsGet(req: operations.AndroidpublisherInappproductsGetRequest, security: operations.AndroidpublisherInappproductsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsGetResponse>;
    /**
     * Creates an in-app product (i.e. a managed product or a subscriptions).
     */
    androidpublisherInappproductsInsert(req: operations.AndroidpublisherInappproductsInsertRequest, security: operations.AndroidpublisherInappproductsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsInsertResponse>;
    /**
     * Lists all in-app products - both managed products and subscriptions. If an app has a large number of in-app products, the response may be paginated. In this case the response field `tokenPagination.nextPageToken` will be set and the caller should provide its value as a `token` request parameter to retrieve the next page.
     */
    androidpublisherInappproductsList(req: operations.AndroidpublisherInappproductsListRequest, security: operations.AndroidpublisherInappproductsListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsListResponse>;
    /**
     * Patches an in-app product (i.e. a managed product or a subscriptions).
     */
    androidpublisherInappproductsPatch(req: operations.AndroidpublisherInappproductsPatchRequest, security: operations.AndroidpublisherInappproductsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsPatchResponse>;
    /**
     * Updates an in-app product (i.e. a managed product or a subscriptions).
     */
    androidpublisherInappproductsUpdate(req: operations.AndroidpublisherInappproductsUpdateRequest, security: operations.AndroidpublisherInappproductsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInappproductsUpdateResponse>;
}
