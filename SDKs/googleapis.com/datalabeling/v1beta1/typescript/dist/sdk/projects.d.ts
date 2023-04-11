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
     * Creates an annotation spec set by providing a set of labels.
     */
    datalabelingProjectsAnnotationSpecSetsCreate(req: operations.DatalabelingProjectsAnnotationSpecSetsCreateRequest, security: operations.DatalabelingProjectsAnnotationSpecSetsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsAnnotationSpecSetsCreateResponse>;
    /**
     * Lists annotation spec sets for a project. Pagination is supported.
     */
    datalabelingProjectsAnnotationSpecSetsList(req: operations.DatalabelingProjectsAnnotationSpecSetsListRequest, security: operations.DatalabelingProjectsAnnotationSpecSetsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsAnnotationSpecSetsListResponse>;
    /**
     * Lists examples in an annotated dataset. Pagination is supported.
     */
    datalabelingProjectsDatasetsAnnotatedDatasetsExamplesList(req: operations.DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListRequest, security: operations.DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListResponse>;
    /**
     * Create a FeedbackMessage object.
     */
    datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreate(req: operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateRequest, security: operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateResponse>;
    /**
     * List FeedbackMessages with pagination.
     */
    datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesList(req: operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListRequest, security: operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListResponse>;
    /**
     * List FeedbackThreads with pagination.
     */
    datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsList(req: operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListRequest, security: operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListResponse>;
    /**
     * Lists annotated datasets for a dataset. Pagination is supported.
     */
    datalabelingProjectsDatasetsAnnotatedDatasetsList(req: operations.DatalabelingProjectsDatasetsAnnotatedDatasetsListRequest, security: operations.DatalabelingProjectsDatasetsAnnotatedDatasetsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsAnnotatedDatasetsListResponse>;
    /**
     * Creates dataset. If success return a Dataset resource.
     */
    datalabelingProjectsDatasetsCreate(req: operations.DatalabelingProjectsDatasetsCreateRequest, security: operations.DatalabelingProjectsDatasetsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsCreateResponse>;
    /**
     * Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.
     */
    datalabelingProjectsDatasetsDataItemsList(req: operations.DatalabelingProjectsDatasetsDataItemsListRequest, security: operations.DatalabelingProjectsDatasetsDataItemsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsDataItemsListResponse>;
    /**
     * Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID.
     */
    datalabelingProjectsDatasetsEvaluationsExampleComparisonsSearch(req: operations.DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchRequest, security: operations.DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchResponse>;
    /**
     * Exports data and annotations from dataset.
     */
    datalabelingProjectsDatasetsExportData(req: operations.DatalabelingProjectsDatasetsExportDataRequest, security: operations.DatalabelingProjectsDatasetsExportDataSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsExportDataResponse>;
    /**
     * Starts a labeling task for image. The type of image labeling task is configured by feature in the request.
     */
    datalabelingProjectsDatasetsImageLabel(req: operations.DatalabelingProjectsDatasetsImageLabelRequest, security: operations.DatalabelingProjectsDatasetsImageLabelSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsImageLabelResponse>;
    /**
     * Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.
     */
    datalabelingProjectsDatasetsImportData(req: operations.DatalabelingProjectsDatasetsImportDataRequest, security: operations.DatalabelingProjectsDatasetsImportDataSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsImportDataResponse>;
    /**
     * Lists datasets under a project. Pagination is supported.
     */
    datalabelingProjectsDatasetsList(req: operations.DatalabelingProjectsDatasetsListRequest, security: operations.DatalabelingProjectsDatasetsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsListResponse>;
    /**
     * Starts a labeling task for text. The type of text labeling task is configured by feature in the request.
     */
    datalabelingProjectsDatasetsTextLabel(req: operations.DatalabelingProjectsDatasetsTextLabelRequest, security: operations.DatalabelingProjectsDatasetsTextLabelSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsTextLabelResponse>;
    /**
     * Starts a labeling task for video. The type of video labeling task is configured by feature in the request.
     */
    datalabelingProjectsDatasetsVideoLabel(req: operations.DatalabelingProjectsDatasetsVideoLabelRequest, security: operations.DatalabelingProjectsDatasetsVideoLabelSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsVideoLabelResponse>;
    /**
     * Creates an evaluation job.
     */
    datalabelingProjectsEvaluationJobsCreate(req: operations.DatalabelingProjectsEvaluationJobsCreateRequest, security: operations.DatalabelingProjectsEvaluationJobsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsEvaluationJobsCreateResponse>;
    /**
     * Lists all evaluation jobs within a project with possible filters. Pagination is supported.
     */
    datalabelingProjectsEvaluationJobsList(req: operations.DatalabelingProjectsEvaluationJobsListRequest, security: operations.DatalabelingProjectsEvaluationJobsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsEvaluationJobsListResponse>;
    /**
     * Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.
     */
    datalabelingProjectsEvaluationJobsPatch(req: operations.DatalabelingProjectsEvaluationJobsPatchRequest, security: operations.DatalabelingProjectsEvaluationJobsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsEvaluationJobsPatchResponse>;
    /**
     * Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.
     */
    datalabelingProjectsEvaluationJobsPause(req: operations.DatalabelingProjectsEvaluationJobsPauseRequest, security: operations.DatalabelingProjectsEvaluationJobsPauseSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsEvaluationJobsPauseResponse>;
    /**
     * Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.
     */
    datalabelingProjectsEvaluationJobsResume(req: operations.DatalabelingProjectsEvaluationJobsResumeRequest, security: operations.DatalabelingProjectsEvaluationJobsResumeSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsEvaluationJobsResumeResponse>;
    /**
     * Searches evaluations within a project.
     */
    datalabelingProjectsEvaluationsSearch(req: operations.DatalabelingProjectsEvaluationsSearchRequest, security: operations.DatalabelingProjectsEvaluationsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsEvaluationsSearchResponse>;
    /**
     * Creates an instruction for how data should be labeled.
     */
    datalabelingProjectsInstructionsCreate(req: operations.DatalabelingProjectsInstructionsCreateRequest, security: operations.DatalabelingProjectsInstructionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsInstructionsCreateResponse>;
    /**
     * Lists instructions for a project. Pagination is supported.
     */
    datalabelingProjectsInstructionsList(req: operations.DatalabelingProjectsInstructionsListRequest, security: operations.DatalabelingProjectsInstructionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsInstructionsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    datalabelingProjectsOperationsCancel(req: operations.DatalabelingProjectsOperationsCancelRequest, security: operations.DatalabelingProjectsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsOperationsCancelResponse>;
    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     */
    datalabelingProjectsOperationsDelete(req: operations.DatalabelingProjectsOperationsDeleteRequest, security: operations.DatalabelingProjectsOperationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsOperationsDeleteResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    datalabelingProjectsOperationsGet(req: operations.DatalabelingProjectsOperationsGetRequest, security: operations.DatalabelingProjectsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     */
    datalabelingProjectsOperationsList(req: operations.DatalabelingProjectsOperationsListRequest, security: operations.DatalabelingProjectsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsOperationsListResponse>;
}
