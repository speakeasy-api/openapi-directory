import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Clients {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete the client
     */
    deleteRealmClientsId(req: operations.DeleteRealmClientsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientsIdResponse>;
    deleteRealmClientsIdDefaultClientScopesClientScopeId(req: operations.DeleteRealmClientsIdDefaultClientScopesClientScopeIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientsIdDefaultClientScopesClientScopeIdResponse>;
    /**
     * Unregister a cluster node from the client
     */
    deleteRealmClientsIdNodesNode(req: operations.DeleteRealmClientsIdNodesNodeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientsIdNodesNodeResponse>;
    deleteRealmClientsIdOptionalClientScopesClientScopeId(req: operations.DeleteRealmClientsIdOptionalClientScopesClientScopeIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientsIdOptionalClientScopesClientScopeIdResponse>;
    /**
     * Get clients belonging to the realm   Returns a list of clients belonging to the realm
     */
    getRealmClients(req: operations.GetRealmClientsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsResponse>;
    /**
     * Get representation of the client
     */
    getRealmClientsId(req: operations.GetRealmClientsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdResponse>;
    /**
     * Get the client secret
     */
    getRealmClientsIdClientSecret(req: operations.GetRealmClientsIdClientSecretRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdClientSecretResponse>;
    /**
     * Get default client scopes.
     */
    getRealmClientsIdDefaultClientScopes(req: operations.GetRealmClientsIdDefaultClientScopesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdDefaultClientScopesResponse>;
    /**
     * Create JSON with payload of example access token
     */
    getRealmClientsIdEvaluateScopesGenerateExampleAccessToken(req: operations.GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdEvaluateScopesGenerateExampleAccessTokenResponse>;
    /**
     * Return list of all protocol mappers, which will be used when generating tokens issued for particular client.
     */
    getRealmClientsIdEvaluateScopesProtocolMappers(req: operations.GetRealmClientsIdEvaluateScopesProtocolMappersRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdEvaluateScopesProtocolMappersResponse>;
    /**
     * Get effective scope mapping of all roles of particular role container, which this client is defacto allowed to have in the accessToken issued for him.
     */
    getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGranted(req: operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdGrantedResponse>;
    /**
     * Get roles, which this client doesn’t have scope for and can’t have them in the accessToken issued for him.
     */
    getRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGranted(req: operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdEvaluateScopesScopeMappingsRoleContainerIdNotGrantedResponse>;
    getRealmClientsIdInstallationProvidersProviderId(req: operations.GetRealmClientsIdInstallationProvidersProviderIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdInstallationProvidersProviderIdResponse>;
    /**
     * Return object stating whether client Authorization permissions have been initialized or not and a reference
     */
    getRealmClientsIdManagementPermissions(req: operations.GetRealmClientsIdManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdManagementPermissionsResponse>;
    /**
     * Get application offline session count   Returns a number of offline user sessions associated with this client   {      "count": number  }
     */
    getRealmClientsIdOfflineSessionCount(req: operations.GetRealmClientsIdOfflineSessionCountRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdOfflineSessionCountResponse>;
    /**
     * Get offline sessions for client   Returns a list of offline user sessions associated with this client
     */
    getRealmClientsIdOfflineSessions(req: operations.GetRealmClientsIdOfflineSessionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdOfflineSessionsResponse>;
    /**
     * Get optional client scopes.
     */
    getRealmClientsIdOptionalClientScopes(req: operations.GetRealmClientsIdOptionalClientScopesRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdOptionalClientScopesResponse>;
    /**
     * Get a user dedicated to the service account
     */
    getRealmClientsIdServiceAccountUser(req: operations.GetRealmClientsIdServiceAccountUserRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdServiceAccountUserResponse>;
    /**
     * Get application session count   Returns a number of user sessions associated with this client   {      "count": number  }
     */
    getRealmClientsIdSessionCount(req: operations.GetRealmClientsIdSessionCountRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdSessionCountResponse>;
    /**
     * Test if registered cluster nodes are available   Tests availability by sending 'ping' request to all cluster nodes.
     */
    getRealmClientsIdTestNodesAvailable(req: operations.GetRealmClientsIdTestNodesAvailableRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdTestNodesAvailableResponse>;
    /**
     * Get user sessions for client   Returns a list of user sessions associated with this client
     */
    getRealmClientsIdUserSessions(req: operations.GetRealmClientsIdUserSessionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsIdUserSessionsResponse>;
    /**
     * Create a new client   Client’s client_id must be unique!
     */
    postRealmClients(req: operations.PostRealmClientsRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsResponse>;
    /**
     * Generate a new secret for the client
     */
    postRealmClientsIdClientSecret(req: operations.PostRealmClientsIdClientSecretRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdClientSecretResponse>;
    /**
     * Register a cluster node with the client   Manually register cluster node to this client - usually it’s not needed to call this directly as adapter should handle  by sending registration request to Keycloak
     */
    postRealmClientsIdNodes(req: operations.PostRealmClientsIdNodesRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdNodesResponse>;
    /**
     * Push the client’s revocation policy to its admin URL   If the client has an admin URL, push revocation policy to it.
     */
    postRealmClientsIdPushRevocation(req: operations.PostRealmClientsIdPushRevocationRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdPushRevocationResponse>;
    /**
     * Generate a new registration access token for the client
     */
    postRealmClientsIdRegistrationAccessToken(req: operations.PostRealmClientsIdRegistrationAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsIdRegistrationAccessTokenResponse>;
    /**
     * Update the client
     */
    putRealmClientsId(req: operations.PutRealmClientsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmClientsIdResponse>;
    putRealmClientsIdDefaultClientScopesClientScopeId(req: operations.PutRealmClientsIdDefaultClientScopesClientScopeIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmClientsIdDefaultClientScopesClientScopeIdResponse>;
    /**
     * Return object stating whether client Authorization permissions have been initialized or not and a reference
     */
    putRealmClientsIdManagementPermissions(req: operations.PutRealmClientsIdManagementPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmClientsIdManagementPermissionsResponse>;
    putRealmClientsIdOptionalClientScopesClientScopeId(req: operations.PutRealmClientsIdOptionalClientScopesClientScopeIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmClientsIdOptionalClientScopesClientScopeIdResponse>;
}
