import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Roles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a role.
     */
    directoryRolesDelete(req: operations.DirectoryRolesDeleteRequest, security: operations.DirectoryRolesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryRolesDeleteResponse>;
    /**
     * Retrieves a role.
     */
    directoryRolesGet(req: operations.DirectoryRolesGetRequest, security: operations.DirectoryRolesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryRolesGetResponse>;
    /**
     * Creates a role.
     */
    directoryRolesInsert(req: operations.DirectoryRolesInsertRequest, security: operations.DirectoryRolesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryRolesInsertResponse>;
    /**
     * Retrieves a paginated list of all the roles in a domain.
     */
    directoryRolesList(req: operations.DirectoryRolesListRequest, security: operations.DirectoryRolesListSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryRolesListResponse>;
    /**
     * Patches a role.
     */
    directoryRolesPatch(req: operations.DirectoryRolesPatchRequest, security: operations.DirectoryRolesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryRolesPatchResponse>;
    /**
     * Updates a role.
     */
    directoryRolesUpdate(req: operations.DirectoryRolesUpdateRequest, security: operations.DirectoryRolesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryRolesUpdateResponse>;
}
