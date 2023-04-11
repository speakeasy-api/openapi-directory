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
     * Create a new ChannelConnection in a particular project and location.
     */
    eventarcProjectsLocationsChannelConnectionsCreate(req: operations.EventarcProjectsLocationsChannelConnectionsCreateRequest, security: operations.EventarcProjectsLocationsChannelConnectionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsChannelConnectionsCreateResponse>;
    /**
     * List channel connections.
     */
    eventarcProjectsLocationsChannelConnectionsList(req: operations.EventarcProjectsLocationsChannelConnectionsListRequest, security: operations.EventarcProjectsLocationsChannelConnectionsListSecurity, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsChannelConnectionsListResponse>;
    /**
     * Create a new channel in a particular project and location.
     */
    eventarcProjectsLocationsChannelsCreate(req: operations.EventarcProjectsLocationsChannelsCreateRequest, security: operations.EventarcProjectsLocationsChannelsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsChannelsCreateResponse>;
    /**
     * List channels.
     */
    eventarcProjectsLocationsChannelsList(req: operations.EventarcProjectsLocationsChannelsListRequest, security: operations.EventarcProjectsLocationsChannelsListSecurity, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsChannelsListResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    eventarcProjectsLocationsList(req: operations.EventarcProjectsLocationsListRequest, security: operations.EventarcProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    eventarcProjectsLocationsOperationsCancel(req: operations.EventarcProjectsLocationsOperationsCancelRequest, security: operations.EventarcProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsOperationsCancelResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    eventarcProjectsLocationsOperationsList(req: operations.EventarcProjectsLocationsOperationsListRequest, security: operations.EventarcProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsOperationsListResponse>;
    /**
     * List providers.
     */
    eventarcProjectsLocationsProvidersList(req: operations.EventarcProjectsLocationsProvidersListRequest, security: operations.EventarcProjectsLocationsProvidersListSecurity, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsProvidersListResponse>;
    /**
     * Create a new trigger in a particular project and location.
     */
    eventarcProjectsLocationsTriggersCreate(req: operations.EventarcProjectsLocationsTriggersCreateRequest, security: operations.EventarcProjectsLocationsTriggersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersCreateResponse>;
    /**
     * Delete a single trigger.
     */
    eventarcProjectsLocationsTriggersDelete(req: operations.EventarcProjectsLocationsTriggersDeleteRequest, security: operations.EventarcProjectsLocationsTriggersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersDeleteResponse>;
    /**
     * Get a single trigger.
     */
    eventarcProjectsLocationsTriggersGet(req: operations.EventarcProjectsLocationsTriggersGetRequest, security: operations.EventarcProjectsLocationsTriggersGetSecurity, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersGetResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    eventarcProjectsLocationsTriggersGetIamPolicy(req: operations.EventarcProjectsLocationsTriggersGetIamPolicyRequest, security: operations.EventarcProjectsLocationsTriggersGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersGetIamPolicyResponse>;
    /**
     * List triggers.
     */
    eventarcProjectsLocationsTriggersList(req: operations.EventarcProjectsLocationsTriggersListRequest, security: operations.EventarcProjectsLocationsTriggersListSecurity, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersListResponse>;
    /**
     * Update a single trigger.
     */
    eventarcProjectsLocationsTriggersPatch(req: operations.EventarcProjectsLocationsTriggersPatchRequest, security: operations.EventarcProjectsLocationsTriggersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersPatchResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    eventarcProjectsLocationsTriggersSetIamPolicy(req: operations.EventarcProjectsLocationsTriggersSetIamPolicyRequest, security: operations.EventarcProjectsLocationsTriggersSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    eventarcProjectsLocationsTriggersTestIamPermissions(req: operations.EventarcProjectsLocationsTriggersTestIamPermissionsRequest, security: operations.EventarcProjectsLocationsTriggersTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersTestIamPermissionsResponse>;
}
