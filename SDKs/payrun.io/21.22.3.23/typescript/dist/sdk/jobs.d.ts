import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Jobs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteBatchJob - Delete the Batch job
     *
     * Deletes the the Batch job
    **/
    deleteBatchJob(req: operations.DeleteBatchJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBatchJobResponse>;
    /**
     * deleteCisJob - Delete the CIS job
     *
     * Deletes the the CIS job
    **/
    deleteCisJob(req: operations.DeleteCisJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCisJobResponse>;
    /**
     * deleteDpsJob - Delete the DPS job
     *
     * Deletes the the DPS job
    **/
    deleteDpsJob(req: operations.DeleteDpsJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDpsJobResponse>;
    /**
     * deletePayRunJob - Delete the pay run job
     *
     * Deletes the the payrun job
    **/
    deletePayRunJob(req: operations.DeletePayRunJobRequest, config?: AxiosRequestConfig): Promise<operations.DeletePayRunJobResponse>;
    /**
     * deleteRtiJob - Delete the RTI job
     *
     * Deletes the the RTI job
    **/
    deleteRtiJob(req: operations.DeleteRtiJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRtiJobResponse>;
    /**
     * deleteThirdPartyJob - Delete the Third Party job
     *
     * Deletes the the Third Party job
    **/
    deleteThirdPartyJob(req: operations.DeleteThirdPartyJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteThirdPartyJobResponse>;
    /**
     * getBatchJobInfo - Get the Batch job information
     *
     * Return the the Batch job information
    **/
    getBatchJobInfo(req: operations.GetBatchJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchJobInfoResponse>;
    /**
     * getBatchJobProgress - Get the Batch job progress
     *
     * Return the the Batch job progress
    **/
    getBatchJobProgress(req: operations.GetBatchJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchJobProgressResponse>;
    /**
     * getBatchJobStatus - Get the Batch job status
     *
     * Return the the Batch job status
    **/
    getBatchJobStatus(req: operations.GetBatchJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchJobStatusResponse>;
    /**
     * getBatchJobs - Get all Batch jobs
     *
     * Gets all the Batch jobs
    **/
    getBatchJobs(req: operations.GetBatchJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchJobsResponse>;
    /**
     * getCisJobInfo - Get the CIS job information
     *
     * Return the the CIS job information
    **/
    getCisJobInfo(req: operations.GetCisJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetCisJobInfoResponse>;
    /**
     * getCisJobProgress - Get the CIS job progress
     *
     * Return the the CIS job progress
    **/
    getCisJobProgress(req: operations.GetCisJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetCisJobProgressResponse>;
    /**
     * getCisJobStatus - Get the CIS job status
     *
     * Return the the CIS job status
    **/
    getCisJobStatus(req: operations.GetCisJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetCisJobStatusResponse>;
    /**
     * getCisJobs - Get all CIS jobs
     *
     * Gets all the CIS jobs
    **/
    getCisJobs(req: operations.GetCisJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetCisJobsResponse>;
    /**
     * getDpsJobInfo - Get the DPS job information
     *
     * Return the the DPS job information
    **/
    getDpsJobInfo(req: operations.GetDpsJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsJobInfoResponse>;
    /**
     * getDpsJobProgress - Get the DPS job progress
     *
     * Return the the DPS job progress
    **/
    getDpsJobProgress(req: operations.GetDpsJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsJobProgressResponse>;
    /**
     * getDpsJobStatus - Get the DPS job status
     *
     * Return the the DPS job status
    **/
    getDpsJobStatus(req: operations.GetDpsJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsJobStatusResponse>;
    /**
     * getDpsJobs - Get all DPS jobs
     *
     * Gets all the DPS jobs
    **/
    getDpsJobs(req: operations.GetDpsJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetDpsJobsResponse>;
    /**
     * getEmployerJobs - Gets all jobs relating to the employer.
     *
     * Returns all job information objects for the specified employer.
    **/
    getEmployerJobs(req: operations.GetEmployerJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetEmployerJobsResponse>;
    /**
     * getPayRunJobInfo - Get the pay run job information
     *
     * Return the the payrun job information
    **/
    getPayRunJobInfo(req: operations.GetPayRunJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunJobInfoResponse>;
    /**
     * getPayRunJobProgress - Get the pay run job progress
     *
     * Return the the payrun job progress
    **/
    getPayRunJobProgress(req: operations.GetPayRunJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunJobProgressResponse>;
    /**
     * getPayRunJobStatus - Get the pay run job status
     *
     * Return the the payrun job status
    **/
    getPayRunJobStatus(req: operations.GetPayRunJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunJobStatusResponse>;
    /**
     * getPayRunJobs - Get all PayRun jobs
     *
     * Gets all the pay run jobs
    **/
    getPayRunJobs(req: operations.GetPayRunJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetPayRunJobsResponse>;
    /**
     * getRtiJobInfo - Get the RTI job information
     *
     * Return the the RTI job information
    **/
    getRtiJobInfo(req: operations.GetRtiJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiJobInfoResponse>;
    /**
     * getRtiJobProgress - Get the RTI job progress
     *
     * Return the the RTI job progress
    **/
    getRtiJobProgress(req: operations.GetRtiJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiJobProgressResponse>;
    /**
     * getRtiJobStatus - Get the RTI job status
     *
     * Return the the RTI job status
    **/
    getRtiJobStatus(req: operations.GetRtiJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiJobStatusResponse>;
    /**
     * getRtiJobs - Get all RTI jobs
     *
     * Gets all the RTI jobs
    **/
    getRtiJobs(req: operations.GetRtiJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetRtiJobsResponse>;
    /**
     * getThirdPartyJobInfo - Get the Third Party job information
     *
     * Return the the Third Party job information
    **/
    getThirdPartyJobInfo(req: operations.GetThirdPartyJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyJobInfoResponse>;
    /**
     * getThirdPartyJobProgress - Get the Third Party job progress
     *
     * Return the the Third Party job progress
    **/
    getThirdPartyJobProgress(req: operations.GetThirdPartyJobProgressRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyJobProgressResponse>;
    /**
     * getThirdPartyJobStatus - Get the Third Party job status
     *
     * Return the the Third Party job status
    **/
    getThirdPartyJobStatus(req: operations.GetThirdPartyJobStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyJobStatusResponse>;
    /**
     * getThirdPartyJobs - Get all Third Party jobs
     *
     * Gets all the Third Party jobs
    **/
    getThirdPartyJobs(req: operations.GetThirdPartyJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyJobsResponse>;
    /**
     * postNewBatchJob - Create new Batch job
     *
     * Adds a new Batch job to the queue and returns the job info
    **/
    postNewBatchJob(req: operations.PostNewBatchJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewBatchJobResponse>;
    /**
     * postNewCisJob - Create new CIS job
     *
     * Adds a new CIS job to the queue and returns the job info
    **/
    postNewCisJob(req: operations.PostNewCisJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewCisJobResponse>;
    /**
     * postNewDpsJob - Create new DPS job
     *
     * Creates the new DPS job to the queue and returns the job info
    **/
    postNewDpsJob(req: operations.PostNewDpsJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewDpsJobResponse>;
    /**
     * postNewPayRunJob - Create new PayRun job
     *
     * Creates the new pay run job to the queue and returns the job info
    **/
    postNewPayRunJob(req: operations.PostNewPayRunJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewPayRunJobResponse>;
    /**
     * postNewRtiJob - Create new RTI job
     *
     * Creates the new RTI job to the queue and returns the job info
    **/
    postNewRtiJob(req: operations.PostNewRtiJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewRtiJobResponse>;
    /**
     * postNewThirdPartyJob - Create new Third Party job
     *
     * Adds a new Third Party job to the queue and returns the job info
    **/
    postNewThirdPartyJob(req: operations.PostNewThirdPartyJobRequest, config?: AxiosRequestConfig): Promise<operations.PostNewThirdPartyJobResponse>;
}
