import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AccountPermissions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one account permission by ID.
     */
    dfareportingAccountPermissionsGet(req: operations.DfareportingAccountPermissionsGetRequest, security: operations.DfareportingAccountPermissionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountPermissionsGetResponse>;
    /**
     * Retrieves the list of account permissions.
     */
    dfareportingAccountPermissionsList(req: operations.DfareportingAccountPermissionsListRequest, security: operations.DfareportingAccountPermissionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountPermissionsListResponse>;
}
