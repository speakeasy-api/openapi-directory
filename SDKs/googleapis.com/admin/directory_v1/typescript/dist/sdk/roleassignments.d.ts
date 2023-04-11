import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RoleAssignments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a role assignment.
     */
    directoryRoleAssignmentsDelete(req: operations.DirectoryRoleAssignmentsDeleteRequest, security: operations.DirectoryRoleAssignmentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryRoleAssignmentsDeleteResponse>;
    /**
     * Retrieves a role assignment.
     */
    directoryRoleAssignmentsGet(req: operations.DirectoryRoleAssignmentsGetRequest, security: operations.DirectoryRoleAssignmentsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryRoleAssignmentsGetResponse>;
    /**
     * Creates a role assignment.
     */
    directoryRoleAssignmentsInsert(req: operations.DirectoryRoleAssignmentsInsertRequest, security: operations.DirectoryRoleAssignmentsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryRoleAssignmentsInsertResponse>;
    /**
     * Retrieves a paginated list of all roleAssignments.
     */
    directoryRoleAssignmentsList(req: operations.DirectoryRoleAssignmentsListRequest, security: operations.DirectoryRoleAssignmentsListSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryRoleAssignmentsListResponse>;
}
