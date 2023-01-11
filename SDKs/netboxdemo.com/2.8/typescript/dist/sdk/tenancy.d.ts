import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Tenancy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    tenancyTenantGroupsCreate(req: operations.TenancyTenantGroupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantGroupsCreateResponse>;
    tenancyTenantGroupsDelete(req: operations.TenancyTenantGroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantGroupsDeleteResponse>;
    /**
     * tenancyTenantGroupsList - Call to super to allow for caching
    **/
    tenancyTenantGroupsList(req: operations.TenancyTenantGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantGroupsListResponse>;
    tenancyTenantGroupsPartialUpdate(req: operations.TenancyTenantGroupsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantGroupsPartialUpdateResponse>;
    /**
     * tenancyTenantGroupsRead - Call to super to allow for caching
    **/
    tenancyTenantGroupsRead(req: operations.TenancyTenantGroupsReadRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantGroupsReadResponse>;
    tenancyTenantGroupsUpdate(req: operations.TenancyTenantGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantGroupsUpdateResponse>;
    tenancyTenantsCreate(req: operations.TenancyTenantsCreateRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantsCreateResponse>;
    tenancyTenantsDelete(req: operations.TenancyTenantsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantsDeleteResponse>;
    /**
     * tenancyTenantsList - Call to super to allow for caching
    **/
    tenancyTenantsList(req: operations.TenancyTenantsListRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantsListResponse>;
    tenancyTenantsPartialUpdate(req: operations.TenancyTenantsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantsPartialUpdateResponse>;
    /**
     * tenancyTenantsRead - Call to super to allow for caching
    **/
    tenancyTenantsRead(req: operations.TenancyTenantsReadRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantsReadResponse>;
    tenancyTenantsUpdate(req: operations.TenancyTenantsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantsUpdateResponse>;
}
