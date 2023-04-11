import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Jobs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
     */
    bigqueryJobsCancel(req: operations.BigqueryJobsCancelRequest, security: operations.BigqueryJobsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryJobsCancelResponse>;
    /**
     * Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted.
     */
    bigqueryJobsDelete(req: operations.BigqueryJobsDeleteRequest, security: operations.BigqueryJobsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryJobsDeleteResponse>;
    /**
     * Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
     */
    bigqueryJobsGet(req: operations.BigqueryJobsGetRequest, security: operations.BigqueryJobsGetSecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryJobsGetResponse>;
    /**
     * Retrieves the results of a query job.
     */
    bigqueryJobsGetQueryResults(req: operations.BigqueryJobsGetQueryResultsRequest, security: operations.BigqueryJobsGetQueryResultsSecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryJobsGetQueryResultsResponse>;
    /**
     * Starts a new asynchronous job. Requires the Can View project role.
     */
    bigqueryJobsInsert(req: operations.BigqueryJobsInsertRequest, security: operations.BigqueryJobsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryJobsInsertResponse>;
    /**
     * Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
     */
    bigqueryJobsList(req: operations.BigqueryJobsListRequest, security: operations.BigqueryJobsListSecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryJobsListResponse>;
    /**
     * Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.
     */
    bigqueryJobsQuery(req: operations.BigqueryJobsQueryRequest, security: operations.BigqueryJobsQuerySecurity, config?: AxiosRequestConfig): Promise<operations.BigqueryJobsQueryResponse>;
}
