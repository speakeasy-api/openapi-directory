import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes an alias.
     */
    directoryGroupsAliasesDelete(req: operations.DirectoryGroupsAliasesDeleteRequest, security: operations.DirectoryGroupsAliasesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryGroupsAliasesDeleteResponse>;
    /**
     * Adds an alias for the group.
     */
    directoryGroupsAliasesInsert(req: operations.DirectoryGroupsAliasesInsertRequest, security: operations.DirectoryGroupsAliasesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryGroupsAliasesInsertResponse>;
    /**
     * Lists all aliases for a group.
     */
    directoryGroupsAliasesList(req: operations.DirectoryGroupsAliasesListRequest, security: operations.DirectoryGroupsAliasesListSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryGroupsAliasesListResponse>;
    /**
     * Deletes a group.
     */
    directoryGroupsDelete(req: operations.DirectoryGroupsDeleteRequest, security: operations.DirectoryGroupsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryGroupsDeleteResponse>;
    /**
     * Retrieves a group's properties.
     */
    directoryGroupsGet(req: operations.DirectoryGroupsGetRequest, security: operations.DirectoryGroupsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryGroupsGetResponse>;
    /**
     * Creates a group.
     */
    directoryGroupsInsert(req: operations.DirectoryGroupsInsertRequest, security: operations.DirectoryGroupsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryGroupsInsertResponse>;
    /**
     * Retrieves all groups of a domain or of a user given a userKey (paginated).
     */
    directoryGroupsList(req: operations.DirectoryGroupsListRequest, security: operations.DirectoryGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryGroupsListResponse>;
    /**
     * Updates a group's properties. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).
     */
    directoryGroupsPatch(req: operations.DirectoryGroupsPatchRequest, security: operations.DirectoryGroupsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryGroupsPatchResponse>;
    /**
     * Updates a group's properties.
     */
    directoryGroupsUpdate(req: operations.DirectoryGroupsUpdateRequest, security: operations.DirectoryGroupsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryGroupsUpdateResponse>;
}
