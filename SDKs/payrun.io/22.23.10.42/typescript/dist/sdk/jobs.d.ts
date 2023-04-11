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
     * Delete the Batch job
     *
     * @remarks
     * Deletes the the Batch job
     */
    deleteBatchJob(req: operations.DeleteBatchJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBatchJobResponse>;
    /**
     * Delete the CIS job
     *
     * @remarks
     * Deletes the the CIS job
     */
    deleteCisJob(req: operations.DeleteCisJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisJobResponse>;
    /**
     * Delete the DPS job
     *
     * @remarks
     * Deletes the the DPS job
     */
    deleteDpsJob(req: operations.DeleteDpsJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDpsJobResponse>;
    /**
     * Delete the pay run job
     *
     * @remarks
     * Deletes the the payrun job
     */
    deletePayRunJob(req: operations.DeletePayRunJobRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayRunJobResponse>;
    /**
     * Delete the RTI job
     *
     * @remarks
     * Deletes the the RTI job
     */
    deleteRtiJob(req: operations.DeleteRtiJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRtiJobResponse>;
    /**
     * Delete the Third Party job
     *
     * @remarks
     * Deletes the the Third Party job
     */
    deleteThirdPartyJob(req: operations.DeleteThirdPartyJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteThirdPartyJobResponse>;
    /**
     * Get the Batch job information
     *
     * @remarks
     * Return the the Batch job information
     */
    getBatchJobInfo(req: operations.GetBatchJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchJobInfoResponse>;
    /**
     * Get the Batch job progress
     *
     * @remarks
     * Return the the Batch job progress
     */
    getBatchJobProgress(req: operations.GetBatchJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchJobProgressResponse>;
    /**
     * Get the Batch job status
     *
     * @remarks
     * Return the the Batch job status
     */
    getBatchJobStatus(req: operations.GetBatchJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchJobStatusResponse>;
    /**
     * Get all Batch jobs
     *
     * @remarks
     * Gets all the Batch jobs
     */
    getBatchJobs(req: operations.GetBatchJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchJobsResponse>;
    /**
     * Get the CIS job information
     *
     * @remarks
     * Return the the CIS job information
     */
    getCisJobInfo(req: operations.GetCisJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetCisJobInfoResponse>;
    /**
     * Get the CIS job progress
     *
     * @remarks
     * Return the the CIS job progress
     */
    getCisJobProgress(req: operations.GetCisJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetCisJobProgressResponse>;
    /**
     * Get the CIS job status
     *
     * @remarks
     * Return the the CIS job status
     */
    getCisJobStatus(req: operations.GetCisJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetCisJobStatusResponse>;
    /**
     * Get all CIS jobs
     *
     * @remarks
     * Gets all the CIS jobs
     */
    getCisJobs(req: operations.GetCisJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetCisJobsResponse>;
    /**
     * Get the DPS job information
     *
     * @remarks
     * Return the the DPS job information
     */
    getDpsJobInfo(req: operations.GetDpsJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsJobInfoResponse>;
    /**
     * Get the DPS job progress
     *
     * @remarks
     * Return the the DPS job progress
     */
    getDpsJobProgress(req: operations.GetDpsJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsJobProgressResponse>;
    /**
     * Get the DPS job status
     *
     * @remarks
     * Return the the DPS job status
     */
    getDpsJobStatus(req: operations.GetDpsJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsJobStatusResponse>;
    /**
     * Get all DPS jobs
     *
     * @remarks
     * Gets all the DPS jobs
     */
    getDpsJobs(req: operations.GetDpsJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsJobsResponse>;
    /**
     * Gets all jobs relating to the employer.
     *
     * @remarks
     * Returns all job information objects for the specified employer.
     */
    getEmployerJobs(req: operations.GetEmployerJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerJobsResponse>;
    /**
     * Get the pay run job information
     *
     * @remarks
     * Return the the payrun job information
     */
    getPayRunJobInfo(req: operations.GetPayRunJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunJobInfoResponse>;
    /**
     * Get the pay run job progress
     *
     * @remarks
     * Return the the payrun job progress
     */
    getPayRunJobProgress(req: operations.GetPayRunJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunJobProgressResponse>;
    /**
     * Get the pay run job status
     *
     * @remarks
     * Return the the payrun job status
     */
    getPayRunJobStatus(req: operations.GetPayRunJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunJobStatusResponse>;
    /**
     * Get all PayRun jobs
     *
     * @remarks
     * Gets all the pay run jobs
     */
    getPayRunJobs(req: operations.GetPayRunJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunJobsResponse>;
    /**
     * Get the RTI job information
     *
     * @remarks
     * Return the the RTI job information
     */
    getRtiJobInfo(req: operations.GetRtiJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiJobInfoResponse>;
    /**
     * Get the RTI job progress
     *
     * @remarks
     * Return the the RTI job progress
     */
    getRtiJobProgress(req: operations.GetRtiJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiJobProgressResponse>;
    /**
     * Get the RTI job status
     *
     * @remarks
     * Return the the RTI job status
     */
    getRtiJobStatus(req: operations.GetRtiJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiJobStatusResponse>;
    /**
     * Get all RTI jobs
     *
     * @remarks
     * Gets all the RTI jobs
     */
    getRtiJobs(req: operations.GetRtiJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiJobsResponse>;
    /**
     * Get the Third Party job information
     *
     * @remarks
     * Return the the Third Party job information
     */
    getThirdPartyJobInfo(req: operations.GetThirdPartyJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyJobInfoResponse>;
    /**
     * Get the Third Party job progress
     *
     * @remarks
     * Return the the Third Party job progress
     */
    getThirdPartyJobProgress(req: operations.GetThirdPartyJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyJobProgressResponse>;
    /**
     * Get the Third Party job status
     *
     * @remarks
     * Return the the Third Party job status
     */
    getThirdPartyJobStatus(req: operations.GetThirdPartyJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyJobStatusResponse>;
    /**
     * Get all Third Party jobs
     *
     * @remarks
     * Gets all the Third Party jobs
     */
    getThirdPartyJobs(req: operations.GetThirdPartyJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyJobsResponse>;
    /**
     * Create new Batch job
     *
     * @remarks
     * Adds a new Batch job to the queue and returns the job info
     */
    postNewBatchJob(req: operations.PostNewBatchJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewBatchJobResponse>;
    /**
     * Create new CIS job
     *
     * @remarks
     * Adds a new CIS job to the queue and returns the job info
     */
    postNewCisJob(req: operations.PostNewCisJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewCisJobResponse>;
    /**
     * Create new DPS job
     *
     * @remarks
     * Creates the new DPS job to the queue and returns the job info
     */
    postNewDpsJob(req: operations.PostNewDpsJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewDpsJobResponse>;
    /**
     * Create new PayRun job
     *
     * @remarks
     * Creates the new pay run job to the queue and returns the job info
     */
    postNewPayRunJob(req: operations.PostNewPayRunJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewPayRunJobResponse>;
    /**
     * Create new RTI job
     *
     * @remarks
     * Creates the new RTI job to the queue and returns the job info
     */
    postNewRtiJob(req: operations.PostNewRtiJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewRtiJobResponse>;
    /**
     * Create new Third Party job
     *
     * @remarks
     * Adds a new Third Party job to the queue and returns the job info
     */
    postNewThirdPartyJob(req: operations.PostNewThirdPartyJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewThirdPartyJobResponse>;
}
