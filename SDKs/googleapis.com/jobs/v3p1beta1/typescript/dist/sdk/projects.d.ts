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
    jobsProjectsClientEventsCreate(req: operations.JobsProjectsClientEventsCreateRequest, security: operations.JobsProjectsClientEventsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsClientEventsCreateResponse>;
    /**
     * Creates a new company entity.
     */
    jobsProjectsCompaniesCreate(req: operations.JobsProjectsCompaniesCreateRequest, security: operations.JobsProjectsCompaniesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsCompaniesCreateResponse>;
    /**
     * Lists all companies associated with the service account.
     */
    jobsProjectsCompaniesList(req: operations.JobsProjectsCompaniesListRequest, security: operations.JobsProjectsCompaniesListSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsCompaniesListResponse>;
    /**
     * Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
     */
    jobsProjectsComplete(req: operations.JobsProjectsCompleteRequest, security: operations.JobsProjectsCompleteSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsCompleteResponse>;
    /**
     * Deletes a list of Jobs by filter.
     */
    jobsProjectsJobsBatchDelete(req: operations.JobsProjectsJobsBatchDeleteRequest, security: operations.JobsProjectsJobsBatchDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsJobsBatchDeleteResponse>;
    /**
     * Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
     */
    jobsProjectsJobsCreate(req: operations.JobsProjectsJobsCreateRequest, security: operations.JobsProjectsJobsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsJobsCreateResponse>;
    /**
     * Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
     */
    jobsProjectsJobsDelete(req: operations.JobsProjectsJobsDeleteRequest, security: operations.JobsProjectsJobsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsJobsDeleteResponse>;
    /**
     * Lists jobs by filter.
     */
    jobsProjectsJobsList(req: operations.JobsProjectsJobsListRequest, security: operations.JobsProjectsJobsListSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsJobsListResponse>;
    /**
     * Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
     */
    jobsProjectsJobsPatch(req: operations.JobsProjectsJobsPatchRequest, security: operations.JobsProjectsJobsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsJobsPatchResponse>;
    /**
     * Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
     */
    jobsProjectsJobsSearch(req: operations.JobsProjectsJobsSearchRequest, security: operations.JobsProjectsJobsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsJobsSearchResponse>;
    /**
     * Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), and has different algorithmic adjustments that are targeted to passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
     */
    jobsProjectsJobsSearchForAlert(req: operations.JobsProjectsJobsSearchForAlertRequest, security: operations.JobsProjectsJobsSearchForAlertSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsJobsSearchForAlertResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    jobsProjectsOperationsGet(req: operations.JobsProjectsOperationsGetRequest, security: operations.JobsProjectsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.JobsProjectsOperationsGetResponse>;
}
