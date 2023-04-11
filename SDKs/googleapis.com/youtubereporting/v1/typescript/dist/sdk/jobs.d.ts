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
     * Creates a job and returns it.
     */
    youtubereportingJobsCreate(req: operations.YoutubereportingJobsCreateRequest, security: operations.YoutubereportingJobsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubereportingJobsCreateResponse>;
    /**
     * Deletes a job.
     */
    youtubereportingJobsDelete(req: operations.YoutubereportingJobsDeleteRequest, security: operations.YoutubereportingJobsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubereportingJobsDeleteResponse>;
    /**
     * Gets a job.
     */
    youtubereportingJobsGet(req: operations.YoutubereportingJobsGetRequest, security: operations.YoutubereportingJobsGetSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubereportingJobsGetResponse>;
    /**
     * Lists jobs.
     */
    youtubereportingJobsList(req: operations.YoutubereportingJobsListRequest, security: operations.YoutubereportingJobsListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubereportingJobsListResponse>;
    /**
     * Gets the metadata of a specific report.
     */
    youtubereportingJobsReportsGet(req: operations.YoutubereportingJobsReportsGetRequest, security: operations.YoutubereportingJobsReportsGetSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubereportingJobsReportsGetResponse>;
    /**
     * Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.
     */
    youtubereportingJobsReportsList(req: operations.YoutubereportingJobsReportsListRequest, security: operations.YoutubereportingJobsReportsListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubereportingJobsReportsListResponse>;
}
