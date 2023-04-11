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
     * Creates a new Network Connectivity Center hub in the specified project.
     */
    networkconnectivityProjectsLocationsGlobalHubsCreate(req: operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest, security: operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse>;
    /**
     * Lists the Network Connectivity Center hubs associated with a given project.
     */
    networkconnectivityProjectsLocationsGlobalHubsList(req: operations.NetworkconnectivityProjectsLocationsGlobalHubsListRequest, security: operations.NetworkconnectivityProjectsLocationsGlobalHubsListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsGlobalHubsListResponse>;
    /**
     * Creates a new internal range in a given project and location.
     */
    networkconnectivityProjectsLocationsInternalRangesCreate(req: operations.NetworkconnectivityProjectsLocationsInternalRangesCreateRequest, security: operations.NetworkconnectivityProjectsLocationsInternalRangesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsInternalRangesCreateResponse>;
    /**
     * Lists internal ranges in a given project and location.
     */
    networkconnectivityProjectsLocationsInternalRangesList(req: operations.NetworkconnectivityProjectsLocationsInternalRangesListRequest, security: operations.NetworkconnectivityProjectsLocationsInternalRangesListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsInternalRangesListResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    networkconnectivityProjectsLocationsList(req: operations.NetworkconnectivityProjectsLocationsListRequest, security: operations.NetworkconnectivityProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    networkconnectivityProjectsLocationsOperationsCancel(req: operations.NetworkconnectivityProjectsLocationsOperationsCancelRequest, security: operations.NetworkconnectivityProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsOperationsCancelResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    networkconnectivityProjectsLocationsOperationsList(req: operations.NetworkconnectivityProjectsLocationsOperationsListRequest, security: operations.NetworkconnectivityProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsOperationsListResponse>;
    /**
     * Creates a Network Connectivity Center spoke.
     */
    networkconnectivityProjectsLocationsSpokesCreate(req: operations.NetworkconnectivityProjectsLocationsSpokesCreateRequest, security: operations.NetworkconnectivityProjectsLocationsSpokesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesCreateResponse>;
    /**
     * Deletes a Network Connectivity Center spoke.
     */
    networkconnectivityProjectsLocationsSpokesDelete(req: operations.NetworkconnectivityProjectsLocationsSpokesDeleteRequest, security: operations.NetworkconnectivityProjectsLocationsSpokesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesDeleteResponse>;
    /**
     * Gets details about a Network Connectivity Center spoke.
     */
    networkconnectivityProjectsLocationsSpokesGet(req: operations.NetworkconnectivityProjectsLocationsSpokesGetRequest, security: operations.NetworkconnectivityProjectsLocationsSpokesGetSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesGetResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    networkconnectivityProjectsLocationsSpokesGetIamPolicy(req: operations.NetworkconnectivityProjectsLocationsSpokesGetIamPolicyRequest, security: operations.NetworkconnectivityProjectsLocationsSpokesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesGetIamPolicyResponse>;
    /**
     * Lists the Network Connectivity Center spokes in a specified project and location.
     */
    networkconnectivityProjectsLocationsSpokesList(req: operations.NetworkconnectivityProjectsLocationsSpokesListRequest, security: operations.NetworkconnectivityProjectsLocationsSpokesListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesListResponse>;
    /**
     * Updates the parameters of a Network Connectivity Center spoke.
     */
    networkconnectivityProjectsLocationsSpokesPatch(req: operations.NetworkconnectivityProjectsLocationsSpokesPatchRequest, security: operations.NetworkconnectivityProjectsLocationsSpokesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesPatchResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    networkconnectivityProjectsLocationsSpokesSetIamPolicy(req: operations.NetworkconnectivityProjectsLocationsSpokesSetIamPolicyRequest, security: operations.NetworkconnectivityProjectsLocationsSpokesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    networkconnectivityProjectsLocationsSpokesTestIamPermissions(req: operations.NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsRequest, security: operations.NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsResponse>;
}
