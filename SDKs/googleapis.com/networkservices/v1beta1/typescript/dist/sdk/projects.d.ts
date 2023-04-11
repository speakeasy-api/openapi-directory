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
     * Creates a new EndpointPolicy in a given project and location.
     */
    networkservicesProjectsLocationsEndpointPoliciesCreate(req: operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest, security: operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateResponse>;
    /**
     * Lists EndpointPolicies in a given project and location.
     */
    networkservicesProjectsLocationsEndpointPoliciesList(req: operations.NetworkservicesProjectsLocationsEndpointPoliciesListRequest, security: operations.NetworkservicesProjectsLocationsEndpointPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsEndpointPoliciesListResponse>;
    /**
     * Creates a new Gateway in a given project and location.
     */
    networkservicesProjectsLocationsGatewaysCreate(req: operations.NetworkservicesProjectsLocationsGatewaysCreateRequest, security: operations.NetworkservicesProjectsLocationsGatewaysCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsGatewaysCreateResponse>;
    /**
     * Lists Gateways in a given project and location.
     */
    networkservicesProjectsLocationsGatewaysList(req: operations.NetworkservicesProjectsLocationsGatewaysListRequest, security: operations.NetworkservicesProjectsLocationsGatewaysListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsGatewaysListResponse>;
    /**
     * Creates a new GrpcRoute in a given project and location.
     */
    networkservicesProjectsLocationsGrpcRoutesCreate(req: operations.NetworkservicesProjectsLocationsGrpcRoutesCreateRequest, security: operations.NetworkservicesProjectsLocationsGrpcRoutesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsGrpcRoutesCreateResponse>;
    /**
     * Lists GrpcRoutes in a given project and location.
     */
    networkservicesProjectsLocationsGrpcRoutesList(req: operations.NetworkservicesProjectsLocationsGrpcRoutesListRequest, security: operations.NetworkservicesProjectsLocationsGrpcRoutesListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsGrpcRoutesListResponse>;
    /**
     * Creates a new HttpRoute in a given project and location.
     */
    networkservicesProjectsLocationsHttpRoutesCreate(req: operations.NetworkservicesProjectsLocationsHttpRoutesCreateRequest, security: operations.NetworkservicesProjectsLocationsHttpRoutesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsHttpRoutesCreateResponse>;
    /**
     * Lists HttpRoute in a given project and location.
     */
    networkservicesProjectsLocationsHttpRoutesList(req: operations.NetworkservicesProjectsLocationsHttpRoutesListRequest, security: operations.NetworkservicesProjectsLocationsHttpRoutesListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsHttpRoutesListResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    networkservicesProjectsLocationsList(req: operations.NetworkservicesProjectsLocationsListRequest, security: operations.NetworkservicesProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsListResponse>;
    /**
     * Creates a new Mesh in a given project and location.
     */
    networkservicesProjectsLocationsMeshesCreate(req: operations.NetworkservicesProjectsLocationsMeshesCreateRequest, security: operations.NetworkservicesProjectsLocationsMeshesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsMeshesCreateResponse>;
    /**
     * Lists Meshes in a given project and location.
     */
    networkservicesProjectsLocationsMeshesList(req: operations.NetworkservicesProjectsLocationsMeshesListRequest, security: operations.NetworkservicesProjectsLocationsMeshesListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsMeshesListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    networkservicesProjectsLocationsOperationsCancel(req: operations.NetworkservicesProjectsLocationsOperationsCancelRequest, security: operations.NetworkservicesProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsOperationsCancelResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     */
    networkservicesProjectsLocationsOperationsList(req: operations.NetworkservicesProjectsLocationsOperationsListRequest, security: operations.NetworkservicesProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsOperationsListResponse>;
    /**
     * Creates a new ServiceBinding in a given project and location.
     */
    networkservicesProjectsLocationsServiceBindingsCreate(req: operations.NetworkservicesProjectsLocationsServiceBindingsCreateRequest, security: operations.NetworkservicesProjectsLocationsServiceBindingsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsServiceBindingsCreateResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    networkservicesProjectsLocationsServiceBindingsGetIamPolicy(req: operations.NetworkservicesProjectsLocationsServiceBindingsGetIamPolicyRequest, security: operations.NetworkservicesProjectsLocationsServiceBindingsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsServiceBindingsGetIamPolicyResponse>;
    /**
     * Lists ServiceBinding in a given project and location.
     */
    networkservicesProjectsLocationsServiceBindingsList(req: operations.NetworkservicesProjectsLocationsServiceBindingsListRequest, security: operations.NetworkservicesProjectsLocationsServiceBindingsListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsServiceBindingsListResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    networkservicesProjectsLocationsServiceBindingsSetIamPolicy(req: operations.NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyRequest, security: operations.NetworkservicesProjectsLocationsServiceBindingsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    networkservicesProjectsLocationsServiceBindingsTestIamPermissions(req: operations.NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsRequest, security: operations.NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsResponse>;
    /**
     * Creates a new TcpRoute in a given project and location.
     */
    networkservicesProjectsLocationsTcpRoutesCreate(req: operations.NetworkservicesProjectsLocationsTcpRoutesCreateRequest, security: operations.NetworkservicesProjectsLocationsTcpRoutesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsTcpRoutesCreateResponse>;
    /**
     * Lists TcpRoute in a given project and location.
     */
    networkservicesProjectsLocationsTcpRoutesList(req: operations.NetworkservicesProjectsLocationsTcpRoutesListRequest, security: operations.NetworkservicesProjectsLocationsTcpRoutesListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsTcpRoutesListResponse>;
    /**
     * Creates a new TlsRoute in a given project and location.
     */
    networkservicesProjectsLocationsTlsRoutesCreate(req: operations.NetworkservicesProjectsLocationsTlsRoutesCreateRequest, security: operations.NetworkservicesProjectsLocationsTlsRoutesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsTlsRoutesCreateResponse>;
    /**
     * Deletes a single TlsRoute.
     */
    networkservicesProjectsLocationsTlsRoutesDelete(req: operations.NetworkservicesProjectsLocationsTlsRoutesDeleteRequest, security: operations.NetworkservicesProjectsLocationsTlsRoutesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsTlsRoutesDeleteResponse>;
    /**
     * Gets details of a single TlsRoute.
     */
    networkservicesProjectsLocationsTlsRoutesGet(req: operations.NetworkservicesProjectsLocationsTlsRoutesGetRequest, security: operations.NetworkservicesProjectsLocationsTlsRoutesGetSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsTlsRoutesGetResponse>;
    /**
     * Lists TlsRoute in a given project and location.
     */
    networkservicesProjectsLocationsTlsRoutesList(req: operations.NetworkservicesProjectsLocationsTlsRoutesListRequest, security: operations.NetworkservicesProjectsLocationsTlsRoutesListSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsTlsRoutesListResponse>;
    /**
     * Updates the parameters of a single TlsRoute.
     */
    networkservicesProjectsLocationsTlsRoutesPatch(req: operations.NetworkservicesProjectsLocationsTlsRoutesPatchRequest, security: operations.NetworkservicesProjectsLocationsTlsRoutesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsTlsRoutesPatchResponse>;
}
