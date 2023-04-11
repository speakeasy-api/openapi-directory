import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a product certification by its name. This method can only be called by certification bodies.
     */
    manufacturersAccountsLanguagesProductCertificationsDelete(req: operations.ManufacturersAccountsLanguagesProductCertificationsDeleteRequest, security: operations.ManufacturersAccountsLanguagesProductCertificationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ManufacturersAccountsLanguagesProductCertificationsDeleteResponse>;
    /**
     * Gets a product certification by its name. This method can only be called by certification bodies.
     */
    manufacturersAccountsLanguagesProductCertificationsGet(req: operations.ManufacturersAccountsLanguagesProductCertificationsGetRequest, security: operations.ManufacturersAccountsLanguagesProductCertificationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ManufacturersAccountsLanguagesProductCertificationsGetResponse>;
    /**
     * Lists product certifications from a specified certification body. This method can only be called by certification bodies.
     */
    manufacturersAccountsLanguagesProductCertificationsList(req: operations.ManufacturersAccountsLanguagesProductCertificationsListRequest, security: operations.ManufacturersAccountsLanguagesProductCertificationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ManufacturersAccountsLanguagesProductCertificationsListResponse>;
    /**
     * Updates (or creates if allow_missing = true) a product certification which links certifications with products. This method can only be called by certification bodies.
     */
    manufacturersAccountsLanguagesProductCertificationsPatch(req: operations.ManufacturersAccountsLanguagesProductCertificationsPatchRequest, security: operations.ManufacturersAccountsLanguagesProductCertificationsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ManufacturersAccountsLanguagesProductCertificationsPatchResponse>;
    /**
     * Deletes the product from a Manufacturer Center account.
     */
    manufacturersAccountsProductsDelete(req: operations.ManufacturersAccountsProductsDeleteRequest, security: operations.ManufacturersAccountsProductsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ManufacturersAccountsProductsDeleteResponse>;
    /**
     * Gets the product from a Manufacturer Center account, including product issues. A recently updated product takes around 15 minutes to process. Changes are only visible after it has been processed. While some issues may be available once the product has been processed, other issues may take days to appear.
     */
    manufacturersAccountsProductsGet(req: operations.ManufacturersAccountsProductsGetRequest, security: operations.ManufacturersAccountsProductsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ManufacturersAccountsProductsGetResponse>;
    /**
     * Lists all the products in a Manufacturer Center account.
     */
    manufacturersAccountsProductsList(req: operations.ManufacturersAccountsProductsListRequest, security: operations.ManufacturersAccountsProductsListSecurity, config?: AxiosRequestConfig): Promise<operations.ManufacturersAccountsProductsListResponse>;
    /**
     * Inserts or updates the attributes of the product in a Manufacturer Center account. Creates a product with the provided attributes. If the product already exists, then all attributes are replaced with the new ones. The checks at upload time are minimal. All required attributes need to be present for a product to be valid. Issues may show up later after the API has accepted a new upload for a product and it is possible to overwrite an existing valid product with an invalid product. To detect this, you should retrieve the product and check it for issues once the new version is available. Uploaded attributes first need to be processed before they can be retrieved. Until then, new products will be unavailable, and retrieval of previously uploaded products will return the original state of the product.
     */
    manufacturersAccountsProductsUpdate(req: operations.ManufacturersAccountsProductsUpdateRequest, security: operations.ManufacturersAccountsProductsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ManufacturersAccountsProductsUpdateResponse>;
}
