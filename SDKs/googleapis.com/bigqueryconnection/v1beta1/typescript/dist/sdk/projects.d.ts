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
     * Creates a new connection.
     */
    bigqueryconnectionProjectsLocationsConnectionsCreate(req: operations.BigqueryconnectionProjectsLocationsConnectionsCreateRequest, security: operations.BigqueryconnectionProjectsLocationsConnectionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsCreateResponse>;
    /**
     * Deletes connection and associated credential.
     */
    bigqueryconnectionProjectsLocationsConnectionsDelete(req: operations.BigqueryconnectionProjectsLocationsConnectionsDeleteRequest, security: operations.BigqueryconnectionProjectsLocationsConnectionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsDeleteResponse>;
    /**
     * Returns specified connection.
     */
    bigqueryconnectionProjectsLocationsConnectionsGet(req: operations.BigqueryconnectionProjectsLocationsConnectionsGetRequest, security: operations.BigqueryconnectionProjectsLocationsConnectionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsGetResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    bigqueryconnectionProjectsLocationsConnectionsGetIamPolicy(req: operations.BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest, security: operations.BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyResponse>;
    /**
     * Returns a list of connections in the given project.
     */
    bigqueryconnectionProjectsLocationsConnectionsList(req: operations.BigqueryconnectionProjectsLocationsConnectionsListRequest, security: operations.BigqueryconnectionProjectsLocationsConnectionsListSecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsListResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    bigqueryconnectionProjectsLocationsConnectionsSetIamPolicy(req: operations.BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyRequest, security: operations.BigqueryconnectionProjectsLocationsConnectionsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    bigqueryconnectionProjectsLocationsConnectionsTestIamPermissions(req: operations.BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsRequest, security: operations.BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsTestIamPermissionsResponse>;
    /**
     * Sets the credential for the specified connection.
     */
    bigqueryconnectionProjectsLocationsConnectionsUpdateCredential(req: operations.BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialRequest, security: operations.BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialSecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryconnectionProjectsLocationsConnectionsUpdateCredentialResponse>;
}
