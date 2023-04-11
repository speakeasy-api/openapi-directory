import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Refresh runtime schema of a connection.
     */
    connectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefresh(req: operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshRequest, security: operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsConnectionSchemaMetadataRefreshResponse>;
    /**
     * Creates a new Connection in a given project and location.
     */
    connectorsProjectsLocationsConnectionsCreate(req: operations.ConnectorsProjectsLocationsConnectionsCreateRequest, security: operations.ConnectorsProjectsLocationsConnectionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsCreateResponse>;
    /**
     * Lists Connections in a given project and location.
     */
    connectorsProjectsLocationsConnectionsList(req: operations.ConnectorsProjectsLocationsConnectionsListRequest, security: operations.ConnectorsProjectsLocationsConnectionsListSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsListResponse>;
    /**
     * Updates the parameters of a single Connection.
     */
    connectorsProjectsLocationsConnectionsPatch(req: operations.ConnectorsProjectsLocationsConnectionsPatchRequest, security: operations.ConnectorsProjectsLocationsConnectionsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsPatchResponse>;
    /**
     * List schema of a runtime actions filtered by action name.
     */
    connectorsProjectsLocationsConnectionsRuntimeActionSchemasList(req: operations.ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListRequest, security: operations.ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListResponse>;
    /**
     * List schema of a runtime entities filtered by entity name.
     */
    connectorsProjectsLocationsConnectionsRuntimeEntitySchemasList(req: operations.ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest, security: operations.ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    connectorsProjectsLocationsList(req: operations.ConnectorsProjectsLocationsListRequest, security: operations.ConnectorsProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    connectorsProjectsLocationsOperationsCancel(req: operations.ConnectorsProjectsLocationsOperationsCancelRequest, security: operations.ConnectorsProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsOperationsCancelResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     */
    connectorsProjectsLocationsOperationsDelete(req: operations.ConnectorsProjectsLocationsOperationsDeleteRequest, security: operations.ConnectorsProjectsLocationsOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsOperationsDeleteResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    connectorsProjectsLocationsOperationsList(req: operations.ConnectorsProjectsLocationsOperationsListRequest, security: operations.ConnectorsProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsOperationsListResponse>;
    /**
     * Lists Connectors in a given project and location.
     */
    connectorsProjectsLocationsProvidersConnectorsList(req: operations.ConnectorsProjectsLocationsProvidersConnectorsListRequest, security: operations.ConnectorsProjectsLocationsProvidersConnectorsListSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsProvidersConnectorsListResponse>;
    /**
     * Gets details of a single connector version.
     */
    connectorsProjectsLocationsProvidersConnectorsVersionsGet(req: operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsGetRequest, security: operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsGetResponse>;
    /**
     * Lists Connector Versions in a given project and location.
     */
    connectorsProjectsLocationsProvidersConnectorsVersionsList(req: operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsListRequest, security: operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsListSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsListResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    connectorsProjectsLocationsProvidersGetIamPolicy(req: operations.ConnectorsProjectsLocationsProvidersGetIamPolicyRequest, security: operations.ConnectorsProjectsLocationsProvidersGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsProvidersGetIamPolicyResponse>;
    /**
     * Lists Providers in a given project and location.
     */
    connectorsProjectsLocationsProvidersList(req: operations.ConnectorsProjectsLocationsProvidersListRequest, security: operations.ConnectorsProjectsLocationsProvidersListSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsProvidersListResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    connectorsProjectsLocationsProvidersSetIamPolicy(req: operations.ConnectorsProjectsLocationsProvidersSetIamPolicyRequest, security: operations.ConnectorsProjectsLocationsProvidersSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsProvidersSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    connectorsProjectsLocationsProvidersTestIamPermissions(req: operations.ConnectorsProjectsLocationsProvidersTestIamPermissionsRequest, security: operations.ConnectorsProjectsLocationsProvidersTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsProvidersTestIamPermissionsResponse>;
}
