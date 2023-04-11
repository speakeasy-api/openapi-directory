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
     * List authorized domains.
     */
    runProjectsLocationsAuthorizeddomainsList(req: operations.RunProjectsLocationsAuthorizeddomainsListRequest, security: operations.RunProjectsLocationsAuthorizeddomainsListSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsAuthorizeddomainsListResponse>;
    /**
     * List configurations.
     */
    runProjectsLocationsConfigurationsList(req: operations.RunProjectsLocationsConfigurationsListRequest, security: operations.RunProjectsLocationsConfigurationsListSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsConfigurationsListResponse>;
    /**
     * Create a new domain mapping.
     */
    runProjectsLocationsDomainmappingsCreate(req: operations.RunProjectsLocationsDomainmappingsCreateRequest, security: operations.RunProjectsLocationsDomainmappingsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsDomainmappingsCreateResponse>;
    /**
     * List all domain mappings.
     */
    runProjectsLocationsDomainmappingsList(req: operations.RunProjectsLocationsDomainmappingsListRequest, security: operations.RunProjectsLocationsDomainmappingsListSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsDomainmappingsListResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    runProjectsLocationsList(req: operations.RunProjectsLocationsListRequest, security: operations.RunProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsListResponse>;
    /**
     * List revisions.
     */
    runProjectsLocationsRevisionsList(req: operations.RunProjectsLocationsRevisionsListRequest, security: operations.RunProjectsLocationsRevisionsListSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsRevisionsListResponse>;
    /**
     * List routes.
     */
    runProjectsLocationsRoutesList(req: operations.RunProjectsLocationsRoutesListRequest, security: operations.RunProjectsLocationsRoutesListSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsRoutesListResponse>;
    /**
     * Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
     */
    runProjectsLocationsServicesCreate(req: operations.RunProjectsLocationsServicesCreateRequest, security: operations.RunProjectsLocationsServicesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesCreateResponse>;
    /**
     * Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
     */
    runProjectsLocationsServicesDelete(req: operations.RunProjectsLocationsServicesDeleteRequest, security: operations.RunProjectsLocationsServicesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesDeleteResponse>;
    /**
     * Gets information about a service.
     */
    runProjectsLocationsServicesGet(req: operations.RunProjectsLocationsServicesGetRequest, security: operations.RunProjectsLocationsServicesGetSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesGetResponse>;
    /**
     * Gets the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.
     */
    runProjectsLocationsServicesGetIamPolicy(req: operations.RunProjectsLocationsServicesGetIamPolicyRequest, security: operations.RunProjectsLocationsServicesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesGetIamPolicyResponse>;
    /**
     * Lists services for the given project and region.
     */
    runProjectsLocationsServicesList(req: operations.RunProjectsLocationsServicesListRequest, security: operations.RunProjectsLocationsServicesListSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesListResponse>;
    /**
     * Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     */
    runProjectsLocationsServicesReplaceService(req: operations.RunProjectsLocationsServicesReplaceServiceRequest, security: operations.RunProjectsLocationsServicesReplaceServiceSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesReplaceServiceResponse>;
    /**
     * Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
     */
    runProjectsLocationsServicesSetIamPolicy(req: operations.RunProjectsLocationsServicesSetIamPolicyRequest, security: operations.RunProjectsLocationsServicesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
     */
    runProjectsLocationsServicesTestIamPermissions(req: operations.RunProjectsLocationsServicesTestIamPermissionsRequest, security: operations.RunProjectsLocationsServicesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.RunProjectsLocationsServicesTestIamPermissionsResponse>;
}
