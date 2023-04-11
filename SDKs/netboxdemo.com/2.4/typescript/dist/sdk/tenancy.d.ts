import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Tenancy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    tenancyChoicesList(config?: AxiosRequestConfig): Promise<operations.TenancyChoicesListResponse>;
    tenancyChoicesRead(req: operations.TenancyChoicesReadRequest, config?: AxiosRequestConfig): Promise<operations.TenancyChoicesReadResponse>;
    tenancyTenantGroupsCreate(req: shared.TenantGroupInput, config?: AxiosRequestConfig): Promise<operations.TenancyTenantGroupsCreateResponse>;
    tenancyTenantGroupsDelete(req: operations.TenancyTenantGroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantGroupsDeleteResponse>;
    tenancyTenantGroupsList(req: operations.TenancyTenantGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantGroupsListResponse>;
    tenancyTenantGroupsPartialUpdate(req: operations.TenancyTenantGroupsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantGroupsPartialUpdateResponse>;
    tenancyTenantGroupsRead(req: operations.TenancyTenantGroupsReadRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantGroupsReadResponse>;
    tenancyTenantGroupsUpdate(req: operations.TenancyTenantGroupsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantGroupsUpdateResponse>;
    tenancyTenantsCreate(req: shared.WritableTenantInput, config?: AxiosRequestConfig): Promise<operations.TenancyTenantsCreateResponse>;
    tenancyTenantsDelete(req: operations.TenancyTenantsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantsDeleteResponse>;
    tenancyTenantsList(req: operations.TenancyTenantsListRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantsListResponse>;
    tenancyTenantsPartialUpdate(req: operations.TenancyTenantsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantsPartialUpdateResponse>;
    tenancyTenantsRead(req: operations.TenancyTenantsReadRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantsReadResponse>;
    tenancyTenantsUpdate(req: operations.TenancyTenantsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TenancyTenantsUpdateResponse>;
}
