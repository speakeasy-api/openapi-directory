import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AccountPermissionGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one account permission group by ID.
     */
    dfareportingAccountPermissionGroupsGet(req: operations.DfareportingAccountPermissionGroupsGetRequest, security: operations.DfareportingAccountPermissionGroupsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountPermissionGroupsGetResponse>;
    /**
     * Retrieves the list of account permission groups.
     */
    dfareportingAccountPermissionGroupsList(req: operations.DfareportingAccountPermissionGroupsListRequest, security: operations.DfareportingAccountPermissionGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountPermissionGroupsListResponse>;
}
