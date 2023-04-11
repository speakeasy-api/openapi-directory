import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Bulk Jobs - Results
 */
export declare class BulkJobsResults {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List job data for a completed bulk job.
     *
     * @remarks
     * Fetches multiple job data records for a completed bulk job. Note that until a bulk job's state is set to `done` the returned `data` will be an empty array. Pagination is not supported, but cursor based polling is via use of the `id[gt]` filter. Pass the last id seen (i.e. `id[gt]=1234`) in order to get the next batch of records.
     */
    getV2BulkJobsBulkJobsIdResults(req: operations.GetV2BulkJobsBulkJobsIdResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetV2BulkJobsBulkJobsIdResultsResponse>;
}
