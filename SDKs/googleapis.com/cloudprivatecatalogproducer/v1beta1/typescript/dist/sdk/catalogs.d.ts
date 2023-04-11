import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Catalogs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates an Association instance under a given Catalog.
     */
    cloudprivatecatalogproducerCatalogsAssociationsCreate(req: operations.CloudprivatecatalogproducerCatalogsAssociationsCreateRequest, security: operations.CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsAssociationsCreateResponse>;
    /**
     * Lists all Association resources under a catalog.
     */
    cloudprivatecatalogproducerCatalogsAssociationsList(req: operations.CloudprivatecatalogproducerCatalogsAssociationsListRequest, security: operations.CloudprivatecatalogproducerCatalogsAssociationsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsAssociationsListResponse>;
    /**
     * Creates a new Catalog resource.
     */
    cloudprivatecatalogproducerCatalogsCreate(req: operations.CloudprivatecatalogproducerCatalogsCreateRequest, security: operations.CloudprivatecatalogproducerCatalogsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsCreateResponse>;
    /**
     * Gets IAM policy for the specified Catalog.
     */
    cloudprivatecatalogproducerCatalogsGetIamPolicy(req: operations.CloudprivatecatalogproducerCatalogsGetIamPolicyRequest, security: operations.CloudprivatecatalogproducerCatalogsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsGetIamPolicyResponse>;
    /**
     * Lists Catalog resources that the producer has access to, within the
     * scope of the parent resource.
     */
    cloudprivatecatalogproducerCatalogsList(req: operations.CloudprivatecatalogproducerCatalogsListRequest, security: operations.CloudprivatecatalogproducerCatalogsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsListResponse>;
    /**
     * Copies a Product under another Catalog.
     */
    cloudprivatecatalogproducerCatalogsProductsCopy(req: operations.CloudprivatecatalogproducerCatalogsProductsCopyRequest, security: operations.CloudprivatecatalogproducerCatalogsProductsCopySecurity, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsProductsCopyResponse>;
    /**
     * Creates a Product instance under a given Catalog.
     */
    cloudprivatecatalogproducerCatalogsProductsCreate(req: operations.CloudprivatecatalogproducerCatalogsProductsCreateRequest, security: operations.CloudprivatecatalogproducerCatalogsProductsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsProductsCreateResponse>;
    /**
     * Creates an Icon instance under a given Product.
     * If Product only has a default icon, a new Icon
     * instance is created and associated with the given Product.
     * If Product already has a non-default icon, the action creates
     * a new Icon instance, associates the newly created
     * Icon with the given Product and deletes the old icon.
     */
    cloudprivatecatalogproducerCatalogsProductsIconsUpload(req: operations.CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest, security: operations.CloudprivatecatalogproducerCatalogsProductsIconsUploadSecurity, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsProductsIconsUploadResponse>;
    /**
     * Lists Product resources that the producer has access to, within the
     * scope of the parent catalog.
     */
    cloudprivatecatalogproducerCatalogsProductsList(req: operations.CloudprivatecatalogproducerCatalogsProductsListRequest, security: operations.CloudprivatecatalogproducerCatalogsProductsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsProductsListResponse>;
    /**
     * Creates a Version instance under a given Product.
     */
    cloudprivatecatalogproducerCatalogsProductsVersionsCreate(req: operations.CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest, security: operations.CloudprivatecatalogproducerCatalogsProductsVersionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsProductsVersionsCreateResponse>;
    /**
     * Hard deletes a Version.
     */
    cloudprivatecatalogproducerCatalogsProductsVersionsDelete(req: operations.CloudprivatecatalogproducerCatalogsProductsVersionsDeleteRequest, security: operations.CloudprivatecatalogproducerCatalogsProductsVersionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsProductsVersionsDeleteResponse>;
    /**
     * Returns the requested Version resource.
     */
    cloudprivatecatalogproducerCatalogsProductsVersionsGet(req: operations.CloudprivatecatalogproducerCatalogsProductsVersionsGetRequest, security: operations.CloudprivatecatalogproducerCatalogsProductsVersionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsProductsVersionsGetResponse>;
    /**
     * Lists Version resources that the producer has access to, within the
     * scope of the parent Product.
     */
    cloudprivatecatalogproducerCatalogsProductsVersionsList(req: operations.CloudprivatecatalogproducerCatalogsProductsVersionsListRequest, security: operations.CloudprivatecatalogproducerCatalogsProductsVersionsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsProductsVersionsListResponse>;
    /**
     * Updates a specific Version resource.
     */
    cloudprivatecatalogproducerCatalogsProductsVersionsPatch(req: operations.CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest, security: operations.CloudprivatecatalogproducerCatalogsProductsVersionsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsProductsVersionsPatchResponse>;
    /**
     * Sets the IAM policy for the specified Catalog.
     */
    cloudprivatecatalogproducerCatalogsSetIamPolicy(req: operations.CloudprivatecatalogproducerCatalogsSetIamPolicyRequest, security: operations.CloudprivatecatalogproducerCatalogsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsSetIamPolicyResponse>;
    /**
     * Tests the IAM permissions for the specified Catalog.
     */
    cloudprivatecatalogproducerCatalogsTestIamPermissions(req: operations.CloudprivatecatalogproducerCatalogsTestIamPermissionsRequest, security: operations.CloudprivatecatalogproducerCatalogsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsTestIamPermissionsResponse>;
    /**
     * Undeletes a deleted Catalog and all resources under it.
     */
    cloudprivatecatalogproducerCatalogsUndelete(req: operations.CloudprivatecatalogproducerCatalogsUndeleteRequest, security: operations.CloudprivatecatalogproducerCatalogsUndeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogproducerCatalogsUndeleteResponse>;
}
