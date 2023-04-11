import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RealmsAdmin {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete the realm
     */
    deleteRealm(req: operations.DeleteRealmRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmResponse>;
    /**
     * Delete all admin events
     */
    deleteRealmAdminEvents(req: operations.DeleteRealmAdminEventsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmAdminEventsResponse>;
    deleteRealmDefaultDefaultClientScopesClientScopeId(req: operations.DeleteRealmDefaultDefaultClientScopesClientScopeIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmDefaultDefaultClientScopesClientScopeIdResponse>;
    deleteRealmDefaultGroupsGroupId(req: operations.DeleteRealmDefaultGroupsGroupIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmDefaultGroupsGroupIdResponse>;
    deleteRealmDefaultOptionalClientScopesClientScopeId(req: operations.DeleteRealmDefaultOptionalClientScopesClientScopeIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmDefaultOptionalClientScopesClientScopeIdResponse>;
    /**
     * Delete all events
     */
    deleteRealmEvents(req: operations.DeleteRealmEventsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmEventsResponse>;
    /**
     * Remove a specific user session.
     */
    deleteRealmSessionsSession(req: operations.DeleteRealmSessionsSessionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmSessionsSessionResponse>;
    /**
     * Get the top-level representation of the realm   It will not include nested information like User and Client representations.
     */
    getRealm(req: operations.GetRealmRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmResponse>;
    /**
     * Get admin events   Returns all admin events, or filters events based on URL query parameters listed here
     */
    getRealmAdminEvents(req: operations.GetRealmAdminEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAdminEventsResponse>;
    /**
     * Get client session stats   Returns a JSON map.
     */
    getRealmClientSessionStats(req: operations.GetRealmClientSessionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientSessionStatsResponse>;
    getRealmCredentialRegistrators(req: operations.GetRealmCredentialRegistratorsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmCredentialRegistratorsResponse>;
    /**
     * Get realm default client scopes.
     */
    getRealmDefaultDefaultClientScopes(req: operations.GetRealmDefaultDefaultClientScopesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmDefaultDefaultClientScopesResponse>;
    /**
     * Get group hierarchy.
     */
    getRealmDefaultGroups(req: operations.GetRealmDefaultGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmDefaultGroupsResponse>;
    /**
     * Get realm optional client scopes.
     */
    getRealmDefaultOptionalClientScopes(req: operations.GetRealmDefaultOptionalClientScopesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmDefaultOptionalClientScopesResponse>;
    /**
     * Get events   Returns all events, or filters them based on URL query parameters listed here
     */
    getRealmEvents(req: operations.GetRealmEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmEventsResponse>;
    /**
     * Get the events provider configuration   Returns JSON object with events provider configuration
     */
    getRealmEventsConfig(req: operations.GetRealmEventsConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmEventsConfigResponse>;
    getRealmGroupByPathPath(req: operations.GetRealmGroupByPathPathRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmGroupByPathPathResponse>;
    getRealmUsersManagementPermissions(req: operations.GetRealmUsersManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmUsersManagementPermissionsResponse>;
    /**
     * Import a realm   Imports a realm from a full representation of that realm.
     */
    post(req: shared.RealmRepresentation, config?: AxiosRequestConfig): Promise<operations.PostResponse>;
    /**
     * Clear cache of external public keys (Public keys of clients or Identity providers)
     */
    postRealmClearKeysCache(req: operations.PostRealmClearKeysCacheRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClearKeysCacheResponse>;
    /**
     * Clear realm cache
     */
    postRealmClearRealmCache(req: operations.PostRealmClearRealmCacheRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClearRealmCacheResponse>;
    /**
     * Clear user cache
     */
    postRealmClearUserCache(req: operations.PostRealmClearUserCacheRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClearUserCacheResponse>;
    /**
     * Base path for importing clients under this realm.
     */
    postRealmClientDescriptionConverter(req: operations.PostRealmClientDescriptionConverterRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientDescriptionConverterResponse>;
    /**
     * Removes all user sessions.
     */
    postRealmLogoutAll(req: operations.PostRealmLogoutAllRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmLogoutAllResponse>;
    /**
     * Partial export of existing realm into a JSON file.
     */
    postRealmPartialExport(req: operations.PostRealmPartialExportRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmPartialExportResponse>;
    /**
     * Partial import from a JSON file to an existing realm.
     */
    postRealmPartialImport(req: operations.PostRealmPartialImportRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmPartialImportResponse>;
    /**
     * Push the realm’s revocation policy to any client that has an admin url associated with it.
     */
    postRealmPushRevocation(req: operations.PostRealmPushRevocationRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmPushRevocationResponse>;
    /**
     * Test LDAP connection
     */
    postRealmTestLDAPConnection(req: operations.PostRealmTestLDAPConnectionRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmTestLDAPConnectionResponse>;
    postRealmTestSMTPConnection(req: operations.PostRealmTestSMTPConnectionRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmTestSMTPConnectionResponse>;
    /**
     * Update the top-level information of the realm   Any user, roles or client information in the representation  will be ignored.
     */
    putRealm(req: operations.PutRealmRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmResponse>;
    putRealmDefaultDefaultClientScopesClientScopeId(req: operations.PutRealmDefaultDefaultClientScopesClientScopeIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmDefaultDefaultClientScopesClientScopeIdResponse>;
    putRealmDefaultGroupsGroupId(req: operations.PutRealmDefaultGroupsGroupIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmDefaultGroupsGroupIdResponse>;
    putRealmDefaultOptionalClientScopesClientScopeId(req: operations.PutRealmDefaultOptionalClientScopesClientScopeIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmDefaultOptionalClientScopesClientScopeIdResponse>;
    /**
     * Update the events provider   Change the events provider and/or its configuration
     */
    putRealmEventsConfig(req: operations.PutRealmEventsConfigRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmEventsConfigResponse>;
    putRealmUsersManagementPermissions(req: operations.PutRealmUsersManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmUsersManagementPermissionsResponse>;
}
