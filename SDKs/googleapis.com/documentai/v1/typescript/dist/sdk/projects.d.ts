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
     * Fetches processor types. Note that we do not use ListProcessorTypes here because it is not paginated.
     */
    documentaiProjectsLocationsFetchProcessorTypes(req: operations.DocumentaiProjectsLocationsFetchProcessorTypesRequest, security: operations.DocumentaiProjectsLocationsFetchProcessorTypesSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsFetchProcessorTypesResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    documentaiProjectsLocationsList(req: operations.DocumentaiProjectsLocationsListRequest, security: operations.DocumentaiProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsListResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    documentaiProjectsLocationsOperationsCancel(req: operations.DocumentaiProjectsLocationsOperationsCancelRequest, security: operations.DocumentaiProjectsLocationsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsOperationsCancelResponse>;
    /**
     * Lists the processor types that exist.
     */
    documentaiProjectsLocationsProcessorTypesList(req: operations.DocumentaiProjectsLocationsProcessorTypesListRequest, security: operations.DocumentaiProjectsLocationsProcessorTypesListSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorTypesListResponse>;
    /**
     * Creates a processor from the type processor that the user chose. The processor will be at "ENABLED" state by default after its creation.
     */
    documentaiProjectsLocationsProcessorsCreate(req: operations.DocumentaiProjectsLocationsProcessorsCreateRequest, security: operations.DocumentaiProjectsLocationsProcessorsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsCreateResponse>;
    /**
     * Disables a processor
     */
    documentaiProjectsLocationsProcessorsDisable(req: operations.DocumentaiProjectsLocationsProcessorsDisableRequest, security: operations.DocumentaiProjectsLocationsProcessorsDisableSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsDisableResponse>;
    /**
     * Enables a processor
     */
    documentaiProjectsLocationsProcessorsEnable(req: operations.DocumentaiProjectsLocationsProcessorsEnableRequest, security: operations.DocumentaiProjectsLocationsProcessorsEnableSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsEnableResponse>;
    /**
     * Send a document for Human Review. The input document should be processed by the specified processor.
     */
    documentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocument(req: operations.DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentRequest, security: operations.DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentResponse>;
    /**
     * Lists all processors which belong to this project.
     */
    documentaiProjectsLocationsProcessorsList(req: operations.DocumentaiProjectsLocationsProcessorsListRequest, security: operations.DocumentaiProjectsLocationsProcessorsListSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsListResponse>;
    /**
     * LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
     */
    documentaiProjectsLocationsProcessorsProcessorVersionsBatchProcess(req: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcessRequest, security: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcessSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcessResponse>;
    /**
     * Deletes the processor version, all artifacts under the processor version will be deleted.
     */
    documentaiProjectsLocationsProcessorsProcessorVersionsDelete(req: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsDeleteRequest, security: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsDeleteResponse>;
    /**
     * Deploys the processor version.
     */
    documentaiProjectsLocationsProcessorsProcessorVersionsDeploy(req: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployRequest, security: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsDeploySecurity, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployResponse>;
    /**
     * Evaluates a ProcessorVersion against annotated documents, producing an Evaluation.
     */
    documentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersion(req: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersionRequest, security: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersionSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersionResponse>;
    /**
     * Retrieves a set of evaluations for a given processor version.
     */
    documentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsList(req: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListRequest, security: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListResponse>;
    /**
     * Lists all versions of a processor.
     */
    documentaiProjectsLocationsProcessorsProcessorVersionsList(req: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsListRequest, security: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsListSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsListResponse>;
    /**
     * Processes a single document.
     */
    documentaiProjectsLocationsProcessorsProcessorVersionsProcess(req: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessRequest, security: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessResponse>;
    /**
     * Trains a new processor version. Operation metadata is returned as cloud_documentai_core.TrainProcessorVersionMetadata.
     */
    documentaiProjectsLocationsProcessorsProcessorVersionsTrain(req: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsTrainRequest, security: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsTrainSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsTrainResponse>;
    /**
     * Undeploys the processor version.
     */
    documentaiProjectsLocationsProcessorsProcessorVersionsUndeploy(req: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeployRequest, security: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeploySecurity, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeployResponse>;
    /**
     * Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.
     */
    documentaiProjectsLocationsProcessorsSetDefaultProcessorVersion(req: operations.DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionRequest, security: operations.DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    documentaiProjectsOperationsGet(req: operations.DocumentaiProjectsOperationsGetRequest, security: operations.DocumentaiProjectsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DocumentaiProjectsOperationsGetResponse>;
}
