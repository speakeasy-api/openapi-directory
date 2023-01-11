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
     * deleteJobById - Delete Job by Id
     *
     * Deletes a transcription job. All data related to the job, such as input media and transcript, will be permanently deleted. A job can only be deleted once it's completed (either with success or failure).
    **/
    deleteJobById(req: operations.DeleteJobByIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJobByIdResponse>;
    /**
     * getJobById - Get Job By Id
     *
     * Returns information about a transcription job
    **/
    getJobById(req: operations.GetJobByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetJobByIdResponse>;
    /**
     * getListOfJobs - Get List of Jobs
     *
     * Gets a list of transcription jobs submitted within the last 30 days in reverse chronological order up to the provided `limit` number of jobs per call. **Note:** Jobs older than 30 days will not be listed. Pagination is supported via passing the last job `id` from a previous call into `starting_after`.
    **/
    getListOfJobs(req: operations.GetListOfJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetListOfJobsResponse>;
    /**
     * submitTranscriptionJob - Submit Transcription Job
     *
     * Starts an asynchronous job to transcribe speech-to-text for a media file. Media files can be specified in two ways, either by including a public url to the media in the transcription job `options` or by uploading a local file as part of a multipart/form request.
    **/
    submitTranscriptionJob(req: operations.SubmitTranscriptionJobRequest, config?: AxiosRequestConfig): Promise<operations.SubmitTranscriptionJobResponse>;
}
