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
     * Creates a pipeline. For a batch pipeline, you can pass scheduler information. Data Pipelines uses the scheduler information to create an internal scheduler that runs jobs periodically. If the internal scheduler is not configured, you can use RunPipeline to run jobs.
     */
    datapipelinesProjectsLocationsPipelinesCreate(req: operations.DatapipelinesProjectsLocationsPipelinesCreateRequest, security: operations.DatapipelinesProjectsLocationsPipelinesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatapipelinesProjectsLocationsPipelinesCreateResponse>;
    /**
     * Deletes a pipeline. If a scheduler job is attached to the pipeline, it will be deleted.
     */
    datapipelinesProjectsLocationsPipelinesDelete(req: operations.DatapipelinesProjectsLocationsPipelinesDeleteRequest, security: operations.DatapipelinesProjectsLocationsPipelinesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DatapipelinesProjectsLocationsPipelinesDeleteResponse>;
    /**
     * Looks up a single pipeline. Returns a "NOT_FOUND" error if no such pipeline exists. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
     */
    datapipelinesProjectsLocationsPipelinesGet(req: operations.DatapipelinesProjectsLocationsPipelinesGetRequest, security: operations.DatapipelinesProjectsLocationsPipelinesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DatapipelinesProjectsLocationsPipelinesGetResponse>;
    /**
     * Lists jobs for a given pipeline. Throws a "FORBIDDEN" error if the caller doesn't have permission to access it.
     */
    datapipelinesProjectsLocationsPipelinesJobsList(req: operations.DatapipelinesProjectsLocationsPipelinesJobsListRequest, security: operations.DatapipelinesProjectsLocationsPipelinesJobsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatapipelinesProjectsLocationsPipelinesJobsListResponse>;
    /**
     * Lists pipelines. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
     */
    datapipelinesProjectsLocationsPipelinesList(req: operations.DatapipelinesProjectsLocationsPipelinesListRequest, security: operations.DatapipelinesProjectsLocationsPipelinesListSecurity, config?: AxiosRequestConfig): Promise<operations.DatapipelinesProjectsLocationsPipelinesListResponse>;
    /**
     * Updates a pipeline. If successful, the updated Pipeline is returned. Returns `NOT_FOUND` if the pipeline doesn't exist. If UpdatePipeline does not return successfully, you can retry the UpdatePipeline request until you receive a successful response.
     */
    datapipelinesProjectsLocationsPipelinesPatch(req: operations.DatapipelinesProjectsLocationsPipelinesPatchRequest, security: operations.DatapipelinesProjectsLocationsPipelinesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DatapipelinesProjectsLocationsPipelinesPatchResponse>;
    /**
     * Creates a job for the specified pipeline directly. You can use this method when the internal scheduler is not configured and you want to trigger the job directly or through an external system. Returns a "NOT_FOUND" error if the pipeline doesn't exist. Returns a "FORBIDDEN" error if the user doesn't have permission to access the pipeline or run jobs for the pipeline.
     */
    datapipelinesProjectsLocationsPipelinesRun(req: operations.DatapipelinesProjectsLocationsPipelinesRunRequest, security: operations.DatapipelinesProjectsLocationsPipelinesRunSecurity, config?: AxiosRequestConfig): Promise<operations.DatapipelinesProjectsLocationsPipelinesRunResponse>;
    /**
     * Freezes pipeline execution permanently. If there's a corresponding scheduler entry, it's deleted, and the pipeline state is changed to "ARCHIVED". However, pipeline metadata is retained.
     */
    datapipelinesProjectsLocationsPipelinesStop(req: operations.DatapipelinesProjectsLocationsPipelinesStopRequest, security: operations.DatapipelinesProjectsLocationsPipelinesStopSecurity, config?: AxiosRequestConfig): Promise<operations.DatapipelinesProjectsLocationsPipelinesStopResponse>;
}
