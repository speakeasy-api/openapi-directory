import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Namespaces {
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
    runNamespacesAuthorizeddomainsList(req: operations.RunNamespacesAuthorizeddomainsListRequest, security: operations.RunNamespacesAuthorizeddomainsListSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesAuthorizeddomainsListResponse>;
    /**
     * List configurations.
     */
    runNamespacesConfigurationsList(req: operations.RunNamespacesConfigurationsListRequest, security: operations.RunNamespacesConfigurationsListSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesConfigurationsListResponse>;
    /**
     * Create a new domain mapping.
     */
    runNamespacesDomainmappingsCreate(req: operations.RunNamespacesDomainmappingsCreateRequest, security: operations.RunNamespacesDomainmappingsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesDomainmappingsCreateResponse>;
    /**
     * Delete a domain mapping.
     */
    runNamespacesDomainmappingsDelete(req: operations.RunNamespacesDomainmappingsDeleteRequest, security: operations.RunNamespacesDomainmappingsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesDomainmappingsDeleteResponse>;
    /**
     * Get information about a domain mapping.
     */
    runNamespacesDomainmappingsGet(req: operations.RunNamespacesDomainmappingsGetRequest, security: operations.RunNamespacesDomainmappingsGetSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesDomainmappingsGetResponse>;
    /**
     * List all domain mappings.
     */
    runNamespacesDomainmappingsList(req: operations.RunNamespacesDomainmappingsListRequest, security: operations.RunNamespacesDomainmappingsListSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesDomainmappingsListResponse>;
    /**
     * Cancel an execution.
     */
    runNamespacesExecutionsCancel(req: operations.RunNamespacesExecutionsCancelRequest, security: operations.RunNamespacesExecutionsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesExecutionsCancelResponse>;
    /**
     * List executions.
     */
    runNamespacesExecutionsList(req: operations.RunNamespacesExecutionsListRequest, security: operations.RunNamespacesExecutionsListSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesExecutionsListResponse>;
    /**
     * Create a job.
     */
    runNamespacesJobsCreate(req: operations.RunNamespacesJobsCreateRequest, security: operations.RunNamespacesJobsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesJobsCreateResponse>;
    /**
     * Delete a job.
     */
    runNamespacesJobsDelete(req: operations.RunNamespacesJobsDeleteRequest, security: operations.RunNamespacesJobsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesJobsDeleteResponse>;
    /**
     * List jobs.
     */
    runNamespacesJobsList(req: operations.RunNamespacesJobsListRequest, security: operations.RunNamespacesJobsListSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesJobsListResponse>;
    /**
     * Replace a job. Only the spec and metadata labels and annotations are modifiable. After the Replace request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     */
    runNamespacesJobsReplaceJob(req: operations.RunNamespacesJobsReplaceJobRequest, security: operations.RunNamespacesJobsReplaceJobSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesJobsReplaceJobResponse>;
    /**
     * Trigger creation of a new execution of this job.
     */
    runNamespacesJobsRun(req: operations.RunNamespacesJobsRunRequest, security: operations.RunNamespacesJobsRunSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesJobsRunResponse>;
    /**
     * List revisions.
     */
    runNamespacesRevisionsList(req: operations.RunNamespacesRevisionsListRequest, security: operations.RunNamespacesRevisionsListSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesRevisionsListResponse>;
    /**
     * List routes.
     */
    runNamespacesRoutesList(req: operations.RunNamespacesRoutesListRequest, security: operations.RunNamespacesRoutesListSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesRoutesListResponse>;
    /**
     * Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
     */
    runNamespacesServicesCreate(req: operations.RunNamespacesServicesCreateRequest, security: operations.RunNamespacesServicesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesServicesCreateResponse>;
    /**
     * Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
     */
    runNamespacesServicesDelete(req: operations.RunNamespacesServicesDeleteRequest, security: operations.RunNamespacesServicesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesServicesDeleteResponse>;
    /**
     * Gets information about a service.
     */
    runNamespacesServicesGet(req: operations.RunNamespacesServicesGetRequest, security: operations.RunNamespacesServicesGetSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesServicesGetResponse>;
    /**
     * Lists services for the given project and region.
     */
    runNamespacesServicesList(req: operations.RunNamespacesServicesListRequest, security: operations.RunNamespacesServicesListSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesServicesListResponse>;
    /**
     * Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
     */
    runNamespacesServicesReplaceService(req: operations.RunNamespacesServicesReplaceServiceRequest, security: operations.RunNamespacesServicesReplaceServiceSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesServicesReplaceServiceResponse>;
    /**
     * Get information about a task.
     */
    runNamespacesTasksGet(req: operations.RunNamespacesTasksGetRequest, security: operations.RunNamespacesTasksGetSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesTasksGetResponse>;
    /**
     * List tasks.
     */
    runNamespacesTasksList(req: operations.RunNamespacesTasksListRequest, security: operations.RunNamespacesTasksListSecurity, config?: AxiosRequestConfig): Promise<operations.RunNamespacesTasksListResponse>;
}
