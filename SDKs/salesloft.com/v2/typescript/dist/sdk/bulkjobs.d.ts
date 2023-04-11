import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Bulk Jobs
 */
export declare class BulkJobs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List bulk jobs
     *
     * @remarks
     * Fetches multiple bulk job records. The records can be filtered, paged, and sorted according to the respective parameters.
     */
    getV2BulkJobs(req: operations.GetV2BulkJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetV2BulkJobsResponse>;
    /**
     * Fetch a bulk job
     *
     * @remarks
     * Fetches a bulk job, by ID only.
     */
    getV2BulkJobsId(req: operations.GetV2BulkJobsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV2BulkJobsIdResponse>;
    /**
     * Create a bulk job
     *
     * @remarks
     * Creates a bulk job. The type of the bulk job must be included when created.
     *
     * For additional information on creating bulk jobs, the types of supported bulk jobs, and examples of the bulk job flow, visit the <a href="/bulk.html" target="_blank" rel="noopener noreferrer">bulk job details page</a>.
     *
     */
    postV2BulkJobs(req: operations.PostV2BulkJobsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostV2BulkJobsResponse>;
    /**
     * Update a bulk job
     *
     * @remarks
     * Updates a bulk job's name and / or marks a bulk job as 'ready_to_execute'.  May only be updated if the bulk job is still in an "open" state.
     *
     * For additional information on creating bulk jobs, the types of supported bulk jobs, and examples of the bulk job flow, visit the <a href="/bulk.html" target="_blank" rel="noopener noreferrer">bulk job details page</a>.
     *
     */
    putV2BulkJobsId(req: operations.PutV2BulkJobsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutV2BulkJobsIdResponse>;
}
