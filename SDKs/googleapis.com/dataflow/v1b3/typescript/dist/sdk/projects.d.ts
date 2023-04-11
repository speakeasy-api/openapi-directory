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
     * Deletes a snapshot.
     */
    dataflowProjectsDeleteSnapshots(req: operations.DataflowProjectsDeleteSnapshotsRequest, security: operations.DataflowProjectsDeleteSnapshotsSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsDeleteSnapshotsResponse>;
    /**
     * List the jobs of a project across all regions.
     */
    dataflowProjectsJobsAggregated(req: operations.DataflowProjectsJobsAggregatedRequest, security: operations.DataflowProjectsJobsAggregatedSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsAggregatedResponse>;
    /**
     * Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
     */
    dataflowProjectsJobsCreate(req: operations.DataflowProjectsJobsCreateRequest, security: operations.DataflowProjectsJobsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsCreateResponse>;
    /**
     * Get encoded debug configuration for component. Not cacheable.
     */
    dataflowProjectsJobsDebugGetConfig(req: operations.DataflowProjectsJobsDebugGetConfigRequest, security: operations.DataflowProjectsJobsDebugGetConfigSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsDebugGetConfigResponse>;
    /**
     * Send encoded debug capture data for component.
     */
    dataflowProjectsJobsDebugSendCapture(req: operations.DataflowProjectsJobsDebugSendCaptureRequest, security: operations.DataflowProjectsJobsDebugSendCaptureSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsDebugSendCaptureResponse>;
    /**
     * Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
     */
    dataflowProjectsJobsGet(req: operations.DataflowProjectsJobsGetRequest, security: operations.DataflowProjectsJobsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsGetResponse>;
    /**
     * Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
     */
    dataflowProjectsJobsGetMetrics(req: operations.DataflowProjectsJobsGetMetricsRequest, security: operations.DataflowProjectsJobsGetMetricsSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsGetMetricsResponse>;
    /**
     * List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
     */
    dataflowProjectsJobsList(req: operations.DataflowProjectsJobsListRequest, security: operations.DataflowProjectsJobsListSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsListResponse>;
    /**
     * Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
     */
    dataflowProjectsJobsMessagesList(req: operations.DataflowProjectsJobsMessagesListRequest, security: operations.DataflowProjectsJobsMessagesListSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsMessagesListResponse>;
    /**
     * Snapshot the state of a streaming job.
     */
    dataflowProjectsJobsSnapshot(req: operations.DataflowProjectsJobsSnapshotRequest, security: operations.DataflowProjectsJobsSnapshotSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsSnapshotResponse>;
    /**
     * Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
     */
    dataflowProjectsJobsUpdate(req: operations.DataflowProjectsJobsUpdateRequest, security: operations.DataflowProjectsJobsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsUpdateResponse>;
    /**
     * Leases a dataflow WorkItem to run.
     */
    dataflowProjectsJobsWorkItemsLease(req: operations.DataflowProjectsJobsWorkItemsLeaseRequest, security: operations.DataflowProjectsJobsWorkItemsLeaseSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsWorkItemsLeaseResponse>;
    /**
     * Reports the status of dataflow WorkItems leased by a worker.
     */
    dataflowProjectsJobsWorkItemsReportStatus(req: operations.DataflowProjectsJobsWorkItemsReportStatusRequest, security: operations.DataflowProjectsJobsWorkItemsReportStatusSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsWorkItemsReportStatusResponse>;
    /**
     * Launch a job with a FlexTemplate.
     */
    dataflowProjectsLocationsFlexTemplatesLaunch(req: operations.DataflowProjectsLocationsFlexTemplatesLaunchRequest, security: operations.DataflowProjectsLocationsFlexTemplatesLaunchSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsFlexTemplatesLaunchResponse>;
    /**
     * Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
     */
    dataflowProjectsLocationsJobsCreate(req: operations.DataflowProjectsLocationsJobsCreateRequest, security: operations.DataflowProjectsLocationsJobsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsCreateResponse>;
    /**
     * Get encoded debug configuration for component. Not cacheable.
     */
    dataflowProjectsLocationsJobsDebugGetConfig(req: operations.DataflowProjectsLocationsJobsDebugGetConfigRequest, security: operations.DataflowProjectsLocationsJobsDebugGetConfigSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsDebugGetConfigResponse>;
    /**
     * Send encoded debug capture data for component.
     */
    dataflowProjectsLocationsJobsDebugSendCapture(req: operations.DataflowProjectsLocationsJobsDebugSendCaptureRequest, security: operations.DataflowProjectsLocationsJobsDebugSendCaptureSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsDebugSendCaptureResponse>;
    /**
     * Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
     */
    dataflowProjectsLocationsJobsGet(req: operations.DataflowProjectsLocationsJobsGetRequest, security: operations.DataflowProjectsLocationsJobsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsGetResponse>;
    /**
     * Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
     */
    dataflowProjectsLocationsJobsGetExecutionDetails(req: operations.DataflowProjectsLocationsJobsGetExecutionDetailsRequest, security: operations.DataflowProjectsLocationsJobsGetExecutionDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsGetExecutionDetailsResponse>;
    /**
     * Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
     */
    dataflowProjectsLocationsJobsGetMetrics(req: operations.DataflowProjectsLocationsJobsGetMetricsRequest, security: operations.DataflowProjectsLocationsJobsGetMetricsSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsGetMetricsResponse>;
    /**
     * List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
     */
    dataflowProjectsLocationsJobsList(req: operations.DataflowProjectsLocationsJobsListRequest, security: operations.DataflowProjectsLocationsJobsListSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsListResponse>;
    /**
     * Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
     */
    dataflowProjectsLocationsJobsMessagesList(req: operations.DataflowProjectsLocationsJobsMessagesListRequest, security: operations.DataflowProjectsLocationsJobsMessagesListSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsMessagesListResponse>;
    /**
     * Snapshot the state of a streaming job.
     */
    dataflowProjectsLocationsJobsSnapshot(req: operations.DataflowProjectsLocationsJobsSnapshotRequest, security: operations.DataflowProjectsLocationsJobsSnapshotSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsSnapshotResponse>;
    /**
     * Lists snapshots.
     */
    dataflowProjectsLocationsJobsSnapshotsList(req: operations.DataflowProjectsLocationsJobsSnapshotsListRequest, security: operations.DataflowProjectsLocationsJobsSnapshotsListSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsSnapshotsListResponse>;
    /**
     * Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
     */
    dataflowProjectsLocationsJobsStagesGetExecutionDetails(req: operations.DataflowProjectsLocationsJobsStagesGetExecutionDetailsRequest, security: operations.DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsStagesGetExecutionDetailsResponse>;
    /**
     * Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
     */
    dataflowProjectsLocationsJobsUpdate(req: operations.DataflowProjectsLocationsJobsUpdateRequest, security: operations.DataflowProjectsLocationsJobsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsUpdateResponse>;
    /**
     * Leases a dataflow WorkItem to run.
     */
    dataflowProjectsLocationsJobsWorkItemsLease(req: operations.DataflowProjectsLocationsJobsWorkItemsLeaseRequest, security: operations.DataflowProjectsLocationsJobsWorkItemsLeaseSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsWorkItemsLeaseResponse>;
    /**
     * Reports the status of dataflow WorkItems leased by a worker.
     */
    dataflowProjectsLocationsJobsWorkItemsReportStatus(req: operations.DataflowProjectsLocationsJobsWorkItemsReportStatusRequest, security: operations.DataflowProjectsLocationsJobsWorkItemsReportStatusSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsWorkItemsReportStatusResponse>;
    /**
     * Deletes a snapshot.
     */
    dataflowProjectsLocationsSnapshotsDelete(req: operations.DataflowProjectsLocationsSnapshotsDeleteRequest, security: operations.DataflowProjectsLocationsSnapshotsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsSnapshotsDeleteResponse>;
    /**
     * Gets information about a snapshot.
     */
    dataflowProjectsLocationsSnapshotsGet(req: operations.DataflowProjectsLocationsSnapshotsGetRequest, security: operations.DataflowProjectsLocationsSnapshotsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsSnapshotsGetResponse>;
    /**
     * Lists snapshots.
     */
    dataflowProjectsLocationsSnapshotsList(req: operations.DataflowProjectsLocationsSnapshotsListRequest, security: operations.DataflowProjectsLocationsSnapshotsListSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsSnapshotsListResponse>;
    /**
     * Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
     */
    dataflowProjectsLocationsTemplatesCreate(req: operations.DataflowProjectsLocationsTemplatesCreateRequest, security: operations.DataflowProjectsLocationsTemplatesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsTemplatesCreateResponse>;
    /**
     * Get the template associated with a template.
     */
    dataflowProjectsLocationsTemplatesGet(req: operations.DataflowProjectsLocationsTemplatesGetRequest, security: operations.DataflowProjectsLocationsTemplatesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsTemplatesGetResponse>;
    /**
     * Launch a template.
     */
    dataflowProjectsLocationsTemplatesLaunch(req: operations.DataflowProjectsLocationsTemplatesLaunchRequest, security: operations.DataflowProjectsLocationsTemplatesLaunchSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsTemplatesLaunchResponse>;
    /**
     * Send a worker_message to the service.
     */
    dataflowProjectsLocationsWorkerMessages(req: operations.DataflowProjectsLocationsWorkerMessagesRequest, security: operations.DataflowProjectsLocationsWorkerMessagesSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsWorkerMessagesResponse>;
    /**
     * Gets information about a snapshot.
     */
    dataflowProjectsSnapshotsGet(req: operations.DataflowProjectsSnapshotsGetRequest, security: operations.DataflowProjectsSnapshotsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsSnapshotsGetResponse>;
    /**
     * Lists snapshots.
     */
    dataflowProjectsSnapshotsList(req: operations.DataflowProjectsSnapshotsListRequest, security: operations.DataflowProjectsSnapshotsListSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsSnapshotsListResponse>;
    /**
     * Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
     */
    dataflowProjectsTemplatesCreate(req: operations.DataflowProjectsTemplatesCreateRequest, security: operations.DataflowProjectsTemplatesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsTemplatesCreateResponse>;
    /**
     * Get the template associated with a template.
     */
    dataflowProjectsTemplatesGet(req: operations.DataflowProjectsTemplatesGetRequest, security: operations.DataflowProjectsTemplatesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsTemplatesGetResponse>;
    /**
     * Launch a template.
     */
    dataflowProjectsTemplatesLaunch(req: operations.DataflowProjectsTemplatesLaunchRequest, security: operations.DataflowProjectsTemplatesLaunchSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsTemplatesLaunchResponse>;
    /**
     * Send a worker_message to the service.
     */
    dataflowProjectsWorkerMessages(req: operations.DataflowProjectsWorkerMessagesRequest, security: operations.DataflowProjectsWorkerMessagesSecurity, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsWorkerMessagesResponse>;
}
