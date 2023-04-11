import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Organizations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search Catalog resources that consumers have access to, within the
     * scope of the consumer cloud resource hierarchy context.
     */
    cloudprivatecatalogOrganizationsCatalogsSearch(req: operations.CloudprivatecatalogOrganizationsCatalogsSearchRequest, security: operations.CloudprivatecatalogOrganizationsCatalogsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogOrganizationsCatalogsSearchResponse>;
    /**
     * Search Product resources that consumers have access to, within the
     * scope of the consumer cloud resource hierarchy context.
     */
    cloudprivatecatalogOrganizationsProductsSearch(req: operations.CloudprivatecatalogOrganizationsProductsSearchRequest, security: operations.CloudprivatecatalogOrganizationsProductsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogOrganizationsProductsSearchResponse>;
    /**
     * Search Version resources that consumers have access to, within the
     * scope of the consumer cloud resource hierarchy context.
     */
    cloudprivatecatalogOrganizationsVersionsSearch(req: operations.CloudprivatecatalogOrganizationsVersionsSearchRequest, security: operations.CloudprivatecatalogOrganizationsVersionsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.CloudprivatecatalogOrganizationsVersionsSearchResponse>;
}
