import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Bulk Jobs - Job Data
 */
export declare class BulkJobsJobData {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List job data for a bulk job
     *
     * @remarks
     * Fetches multiple job data records for a given bulk job. Pagination is not supported, but cursor based polling is via use of the `id[gt]` filter. Pass the last id seen (i.e. `id[gt]=1234`) in order to get the next batch of records.
     */
    getV2BulkJobsBulkJobsIdJobData(req: operations.GetV2BulkJobsBulkJobsIdJobDataRequest, config?: AxiosRequestConfig): Promise<operations.GetV2BulkJobsBulkJobsIdJobDataResponse>;
    /**
     * Create job data for a bulk job
     *
     * @remarks
     * Upload job data for the specified bulk job. Upload an array of objects, where element contains the parameters necessary to execute the individual calls. Each call to this endpoint can handle up to 5,000 records at a time. There is no limit to how many times you can create job data for a given bulk job.
     *
     * For additional information on creating bulk jobs, the types of supported bulk jobs, and examples of the bulk job flow, visit the <a href="/bulk.html" target="_blank" rel="noopener noreferrer">bulk job details page</a>.
     *
     */
    postV2BulkJobsBulkJobsIdJobData(req: operations.PostV2BulkJobsBulkJobsIdJobDataRequest, config?: AxiosRequestConfig): Promise<operations.PostV2BulkJobsBulkJobsIdJobDataResponse>;
}
