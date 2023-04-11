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
     * Lists information about the supported locations for this service.
     */
    servicedirectoryProjectsLocationsList(req: operations.ServicedirectoryProjectsLocationsListRequest, security: operations.ServicedirectoryProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsListResponse>;
    /**
     * Creates a namespace, and returns the new namespace.
     */
    servicedirectoryProjectsLocationsNamespacesCreate(req: operations.ServicedirectoryProjectsLocationsNamespacesCreateRequest, security: operations.ServicedirectoryProjectsLocationsNamespacesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesCreateResponse>;
    /**
     * Lists all namespaces.
     */
    servicedirectoryProjectsLocationsNamespacesList(req: operations.ServicedirectoryProjectsLocationsNamespacesListRequest, security: operations.ServicedirectoryProjectsLocationsNamespacesListSecurity, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesListResponse>;
    /**
     * Creates a service, and returns the new service.
     */
    servicedirectoryProjectsLocationsNamespacesServicesCreate(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesCreateRequest, security: operations.ServicedirectoryProjectsLocationsNamespacesServicesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesCreateResponse>;
    /**
     * Creates an endpoint, and returns the new endpoint.
     */
    servicedirectoryProjectsLocationsNamespacesServicesEndpointsCreate(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateRequest, security: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsCreateResponse>;
    /**
     * Deletes an endpoint.
     */
    servicedirectoryProjectsLocationsNamespacesServicesEndpointsDelete(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteRequest, security: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteResponse>;
    /**
     * Gets an endpoint.
     */
    servicedirectoryProjectsLocationsNamespacesServicesEndpointsGet(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetRequest, security: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetResponse>;
    /**
     * Lists all endpoints.
     */
    servicedirectoryProjectsLocationsNamespacesServicesEndpointsList(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListRequest, security: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListSecurity, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsListResponse>;
    /**
     * Updates an endpoint.
     */
    servicedirectoryProjectsLocationsNamespacesServicesEndpointsPatch(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchRequest, security: operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesEndpointsPatchResponse>;
    /**
     * Lists all services belonging to a namespace.
     */
    servicedirectoryProjectsLocationsNamespacesServicesList(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesListRequest, security: operations.ServicedirectoryProjectsLocationsNamespacesServicesListSecurity, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesListResponse>;
    /**
     * Returns a service and its associated endpoints. Resolving a service is not considered an active developer method.
     */
    servicedirectoryProjectsLocationsNamespacesServicesResolve(req: operations.ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest, security: operations.ServicedirectoryProjectsLocationsNamespacesServicesResolveSecurity, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsNamespacesServicesResolveResponse>;
    /**
     * Gets the IAM Policy for a resource
     */
    servicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicy(req: operations.ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyRequest, security: operations.ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicyResponse>;
    /**
     * Sets the IAM Policy for a resource
     */
    servicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicy(req: operations.ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyRequest, security: operations.ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicyResponse>;
    /**
     * Tests IAM permissions for a resource (namespace, service or service workload only).
     */
    servicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissions(req: operations.ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsRequest, security: operations.ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsResponse>;
}
