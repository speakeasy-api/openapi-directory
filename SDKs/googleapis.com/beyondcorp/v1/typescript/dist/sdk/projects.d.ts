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
     * Creates a new AppConnection in a given project and location.
     */
    beyondcorpProjectsLocationsAppConnectionsCreate(req: operations.BeyondcorpProjectsLocationsAppConnectionsCreateRequest, security: operations.BeyondcorpProjectsLocationsAppConnectionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsAppConnectionsCreateResponse>;
    /**
     * Lists AppConnections in a given project and location.
     */
    beyondcorpProjectsLocationsAppConnectionsList(req: operations.BeyondcorpProjectsLocationsAppConnectionsListRequest, security: operations.BeyondcorpProjectsLocationsAppConnectionsListSecurity, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsAppConnectionsListResponse>;
    /**
     * Resolves AppConnections details for a given AppConnector. An internal method called by a connector to find AppConnections to connect to.
     */
    beyondcorpProjectsLocationsAppConnectionsResolve(req: operations.BeyondcorpProjectsLocationsAppConnectionsResolveRequest, security: operations.BeyondcorpProjectsLocationsAppConnectionsResolveSecurity, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsAppConnectionsResolveResponse>;
    /**
     * Creates a new AppConnector in a given project and location.
     */
    beyondcorpProjectsLocationsAppConnectorsCreate(req: operations.BeyondcorpProjectsLocationsAppConnectorsCreateRequest, security: operations.BeyondcorpProjectsLocationsAppConnectorsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsAppConnectorsCreateResponse>;
    /**
     * Lists AppConnectors in a given project and location.
     */
    beyondcorpProjectsLocationsAppConnectorsList(req: operations.BeyondcorpProjectsLocationsAppConnectorsListRequest, security: operations.BeyondcorpProjectsLocationsAppConnectorsListSecurity, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsAppConnectorsListResponse>;
    /**
     * Report status for a given connector.
     */
    beyondcorpProjectsLocationsAppConnectorsReportStatus(req: operations.BeyondcorpProjectsLocationsAppConnectorsReportStatusRequest, security: operations.BeyondcorpProjectsLocationsAppConnectorsReportStatusSecurity, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsAppConnectorsReportStatusResponse>;
    /**
     * Gets instance configuration for a given AppConnector. An internal method called by a AppConnector to get its container config.
     */
    beyondcorpProjectsLocationsAppConnectorsResolveInstanceConfig(req: operations.BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigRequest, security: operations.BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigSecurity, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsAppConnectorsResolveInstanceConfigResponse>;
    /**
     * Creates a new AppGateway in a given project and location.
     */
    beyondcorpProjectsLocationsAppGatewaysCreate(req: operations.BeyondcorpProjectsLocationsAppGatewaysCreateRequest, security: operations.BeyondcorpProjectsLocationsAppGatewaysCreateSecurity, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsAppGatewaysCreateResponse>;
    /**
     * Lists AppGateways in a given project and location.
     */
    beyondcorpProjectsLocationsAppGatewaysList(req: operations.BeyondcorpProjectsLocationsAppGatewaysListRequest, security: operations.BeyondcorpProjectsLocationsAppGatewaysListSecurity, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsAppGatewaysListResponse>;
    /**
     * Creates a new ClientConnectorService in a given project and location.
     */
    beyondcorpProjectsLocationsClientConnectorServicesCreate(req: operations.BeyondcorpProjectsLocationsClientConnectorServicesCreateRequest, security: operations.BeyondcorpProjectsLocationsClientConnectorServicesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsClientConnectorServicesCreateResponse>;
    /**
     * Lists ClientConnectorServices in a given project and location.
     */
    beyondcorpProjectsLocationsClientConnectorServicesList(req: operations.BeyondcorpProjectsLocationsClientConnectorServicesListRequest, security: operations.BeyondcorpProjectsLocationsClientConnectorServicesListSecurity, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsClientConnectorServicesListResponse>;
    /**
     * Updates the parameters of a single ClientConnectorService.
     */
    beyondcorpProjectsLocationsClientConnectorServicesPatch(req: operations.BeyondcorpProjectsLocationsClientConnectorServicesPatchRequest, security: operations.BeyondcorpProjectsLocationsClientConnectorServicesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsClientConnectorServicesPatchResponse>;
    /**
     * Creates a new ClientGateway in a given project and location.
     */
    beyondcorpProjectsLocationsClientGatewaysCreate(req: operations.BeyondcorpProjectsLocationsClientGatewaysCreateRequest, security: operations.BeyondcorpProjectsLocationsClientGatewaysCreateSecurity, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsClientGatewaysCreateResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    beyondcorpProjectsLocationsClientGatewaysGetIamPolicy(req: operations.BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyRequest, security: operations.BeyondcorpProjectsLocationsClientGatewaysGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsClientGatewaysGetIamPolicyResponse>;
    /**
     * Lists ClientGateways in a given project and location.
     */
    beyondcorpProjectsLocationsClientGatewaysList(req: operations.BeyondcorpProjectsLocationsClientGatewaysListRequest, security: operations.BeyondcorpProjectsLocationsClientGatewaysListSecurity, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsClientGatewaysListResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    beyondcorpProjectsLocationsClientGatewaysSetIamPolicy(req: operations.BeyondcorpProjectsLocationsClientGatewaysSetIamPolicyRequest, security: operations.BeyondcorpProjectsLocationsClientGatewaysSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsClientGatewaysSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    beyondcorpProjectsLocationsClientGatewaysTestIamPermissions(req: operations.BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsRequest, security: operations.BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsClientGatewaysTestIamPermissionsResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    beyondcorpProjectsLocationsList(req: operations.BeyondcorpProjectsLocationsListRequest, security: operations.BeyondcorpProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    beyondcorpProjectsLocationsOperationsCancel(req: operations.BeyondcorpProjectsLocationsOperationsCancelRequest, security: operations.BeyondcorpProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsOperationsCancelResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     */
    beyondcorpProjectsLocationsOperationsDelete(req: operations.BeyondcorpProjectsLocationsOperationsDeleteRequest, security: operations.BeyondcorpProjectsLocationsOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsOperationsDeleteResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    beyondcorpProjectsLocationsOperationsGet(req: operations.BeyondcorpProjectsLocationsOperationsGetRequest, security: operations.BeyondcorpProjectsLocationsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    beyondcorpProjectsLocationsOperationsList(req: operations.BeyondcorpProjectsLocationsOperationsListRequest, security: operations.BeyondcorpProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.BeyondcorpProjectsLocationsOperationsListResponse>;
}
