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
     * Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
     */
    jobsProjectsTenantsClientEventsCreate(req: operations.JobsProjectsTenantsClientEventsCreateRequest, security: operations.JobsProjectsTenantsClientEventsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsClientEventsCreateResponse>;
    /**
     * Creates a new company entity.
     */
    jobsProjectsTenantsCompaniesCreate(req: operations.JobsProjectsTenantsCompaniesCreateRequest, security: operations.JobsProjectsTenantsCompaniesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsCompaniesCreateResponse>;
    /**
     * Lists all companies associated with the project.
     */
    jobsProjectsTenantsCompaniesList(req: operations.JobsProjectsTenantsCompaniesListRequest, security: operations.JobsProjectsTenantsCompaniesListSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsCompaniesListResponse>;
    /**
     * Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
     */
    jobsProjectsTenantsCompleteQuery(req: operations.JobsProjectsTenantsCompleteQueryRequest, security: operations.JobsProjectsTenantsCompleteQuerySecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsCompleteQueryResponse>;
    /**
     * Creates a new tenant entity.
     */
    jobsProjectsTenantsCreate(req: operations.JobsProjectsTenantsCreateRequest, security: operations.JobsProjectsTenantsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsCreateResponse>;
    /**
     * Begins executing a batch create jobs operation.
     */
    jobsProjectsTenantsJobsBatchCreate(req: operations.JobsProjectsTenantsJobsBatchCreateRequest, security: operations.JobsProjectsTenantsJobsBatchCreateSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsJobsBatchCreateResponse>;
    /**
     * Begins executing a batch delete jobs operation.
     */
    jobsProjectsTenantsJobsBatchDelete(req: operations.JobsProjectsTenantsJobsBatchDeleteRequest, security: operations.JobsProjectsTenantsJobsBatchDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsJobsBatchDeleteResponse>;
    /**
     * Begins executing a batch update jobs operation.
     */
    jobsProjectsTenantsJobsBatchUpdate(req: operations.JobsProjectsTenantsJobsBatchUpdateRequest, security: operations.JobsProjectsTenantsJobsBatchUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsJobsBatchUpdateResponse>;
    /**
     * Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
     */
    jobsProjectsTenantsJobsCreate(req: operations.JobsProjectsTenantsJobsCreateRequest, security: operations.JobsProjectsTenantsJobsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsJobsCreateResponse>;
    /**
     * Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
     */
    jobsProjectsTenantsJobsDelete(req: operations.JobsProjectsTenantsJobsDeleteRequest, security: operations.JobsProjectsTenantsJobsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsJobsDeleteResponse>;
    /**
     * Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.
     */
    jobsProjectsTenantsJobsGet(req: operations.JobsProjectsTenantsJobsGetRequest, security: operations.JobsProjectsTenantsJobsGetSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsJobsGetResponse>;
    /**
     * Lists jobs by filter.
     */
    jobsProjectsTenantsJobsList(req: operations.JobsProjectsTenantsJobsListRequest, security: operations.JobsProjectsTenantsJobsListSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsJobsListResponse>;
    /**
     * Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
     */
    jobsProjectsTenantsJobsPatch(req: operations.JobsProjectsTenantsJobsPatchRequest, security: operations.JobsProjectsTenantsJobsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsJobsPatchResponse>;
    /**
     * Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
     */
    jobsProjectsTenantsJobsSearch(req: operations.JobsProjectsTenantsJobsSearchRequest, security: operations.JobsProjectsTenantsJobsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsJobsSearchResponse>;
    /**
     * Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
     */
    jobsProjectsTenantsJobsSearchForAlert(req: operations.JobsProjectsTenantsJobsSearchForAlertRequest, security: operations.JobsProjectsTenantsJobsSearchForAlertSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsJobsSearchForAlertResponse>;
    /**
     * Lists all tenants associated with the project.
     */
    jobsProjectsTenantsList(req: operations.JobsProjectsTenantsListRequest, security: operations.JobsProjectsTenantsListSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsTenantsListResponse>;
}
