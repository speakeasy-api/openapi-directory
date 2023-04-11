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
     * Performs explanation on the data in the request. {% dynamic include "/ai-platform/includes/___explain-request" %}
     */
    mlProjectsExplain(req: operations.MlProjectsExplainRequest, security: operations.MlProjectsExplainSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsExplainResponse>;
    /**
     * Get the service account information associated with your project. You need this information in order to grant the service account permissions for the Google Cloud Storage location where you put your model training code for training the model with Google Cloud Machine Learning.
     */
    mlProjectsGetConfig(req: operations.MlProjectsGetConfigRequest, security: operations.MlProjectsGetConfigSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsGetConfigResponse>;
    /**
     * Creates a training or a batch prediction job.
     */
    mlProjectsJobsCreate(req: operations.MlProjectsJobsCreateRequest, security: operations.MlProjectsJobsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsJobsCreateResponse>;
    /**
     * Lists the jobs in the project. If there are no jobs that match the request parameters, the list request returns an empty response body: {}.
     */
    mlProjectsJobsList(req: operations.MlProjectsJobsListRequest, security: operations.MlProjectsJobsListSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsJobsListResponse>;
    /**
     * List all locations that provides at least one type of CMLE capability.
     */
    mlProjectsLocationsList(req: operations.MlProjectsLocationsListRequest, security: operations.MlProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsLocationsListResponse>;
    /**
     * Creates a study.
     */
    mlProjectsLocationsStudiesCreate(req: operations.MlProjectsLocationsStudiesCreateRequest, security: operations.MlProjectsLocationsStudiesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsLocationsStudiesCreateResponse>;
    /**
     * Lists all the studies in a region for an associated project.
     */
    mlProjectsLocationsStudiesList(req: operations.MlProjectsLocationsStudiesListRequest, security: operations.MlProjectsLocationsStudiesListSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsLocationsStudiesListResponse>;
    /**
     * Adds a measurement of the objective metrics to a trial. This measurement is assumed to have been taken before the trial is complete.
     */
    mlProjectsLocationsStudiesTrialsAddMeasurement(req: operations.MlProjectsLocationsStudiesTrialsAddMeasurementRequest, security: operations.MlProjectsLocationsStudiesTrialsAddMeasurementSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsLocationsStudiesTrialsAddMeasurementResponse>;
    /**
     * Checks whether a trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a CheckTrialEarlyStoppingStateResponse.
     */
    mlProjectsLocationsStudiesTrialsCheckEarlyStoppingState(req: operations.MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateRequest, security: operations.MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateResponse>;
    /**
     * Marks a trial as complete.
     */
    mlProjectsLocationsStudiesTrialsComplete(req: operations.MlProjectsLocationsStudiesTrialsCompleteRequest, security: operations.MlProjectsLocationsStudiesTrialsCompleteSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsLocationsStudiesTrialsCompleteResponse>;
    /**
     * Adds a user provided trial to a study.
     */
    mlProjectsLocationsStudiesTrialsCreate(req: operations.MlProjectsLocationsStudiesTrialsCreateRequest, security: operations.MlProjectsLocationsStudiesTrialsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsLocationsStudiesTrialsCreateResponse>;
    /**
     * Lists the trials associated with a study.
     */
    mlProjectsLocationsStudiesTrialsList(req: operations.MlProjectsLocationsStudiesTrialsListRequest, security: operations.MlProjectsLocationsStudiesTrialsListSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsLocationsStudiesTrialsListResponse>;
    /**
     * Lists the pareto-optimal trials for multi-objective study or the optimal trials for single-objective study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency
     */
    mlProjectsLocationsStudiesTrialsListOptimalTrials(req: operations.MlProjectsLocationsStudiesTrialsListOptimalTrialsRequest, security: operations.MlProjectsLocationsStudiesTrialsListOptimalTrialsSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsLocationsStudiesTrialsListOptimalTrialsResponse>;
    /**
     * Stops a trial.
     */
    mlProjectsLocationsStudiesTrialsStop(req: operations.MlProjectsLocationsStudiesTrialsStopRequest, security: operations.MlProjectsLocationsStudiesTrialsStopSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsLocationsStudiesTrialsStopResponse>;
    /**
     * Adds one or more trials to a study, with parameter values suggested by AI Platform Vizier. Returns a long-running operation associated with the generation of trial suggestions. When this long-running operation succeeds, it will contain a SuggestTrialsResponse.
     */
    mlProjectsLocationsStudiesTrialsSuggest(req: operations.MlProjectsLocationsStudiesTrialsSuggestRequest, security: operations.MlProjectsLocationsStudiesTrialsSuggestSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsLocationsStudiesTrialsSuggestResponse>;
    /**
     * Creates a model which will later contain one or more versions. You must add at least one version before you can request predictions from the model. Add versions by calling projects.models.versions.create.
     */
    mlProjectsModelsCreate(req: operations.MlProjectsModelsCreateRequest, security: operations.MlProjectsModelsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsModelsCreateResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    mlProjectsModelsGetIamPolicy(req: operations.MlProjectsModelsGetIamPolicyRequest, security: operations.MlProjectsModelsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsModelsGetIamPolicyResponse>;
    /**
     * Lists the models in a project. Each project can contain multiple models, and each model can have multiple versions. If there are no models that match the request parameters, the list request returns an empty response body: {}.
     */
    mlProjectsModelsList(req: operations.MlProjectsModelsListRequest, security: operations.MlProjectsModelsListSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsModelsListResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    mlProjectsModelsSetIamPolicy(req: operations.MlProjectsModelsSetIamPolicyRequest, security: operations.MlProjectsModelsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsModelsSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    mlProjectsModelsTestIamPermissions(req: operations.MlProjectsModelsTestIamPermissionsRequest, security: operations.MlProjectsModelsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsModelsTestIamPermissionsResponse>;
    /**
     * Creates a new version of a model from a trained TensorFlow model. If the version created in the cloud by this call is the first deployed version of the specified model, it will be made the default version of the model. When you add a version to a model that already has one or more versions, the default version does not automatically change. If you want a new version to be the default, you must call projects.models.versions.setDefault.
     */
    mlProjectsModelsVersionsCreate(req: operations.MlProjectsModelsVersionsCreateRequest, security: operations.MlProjectsModelsVersionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsModelsVersionsCreateResponse>;
    /**
     * Deletes a model version. Each model can have multiple versions deployed and in use at any given time. Use this method to remove a single version. Note: You cannot delete the version that is set as the default version of the model unless it is the only remaining version.
     */
    mlProjectsModelsVersionsDelete(req: operations.MlProjectsModelsVersionsDeleteRequest, security: operations.MlProjectsModelsVersionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsModelsVersionsDeleteResponse>;
    /**
     * Gets basic information about all the versions of a model. If you expect that a model has many versions, or if you need to handle only a limited number of results at a time, you can request that the list be retrieved in batches (called pages). If there are no versions that match the request parameters, the list request returns an empty response body: {}.
     */
    mlProjectsModelsVersionsList(req: operations.MlProjectsModelsVersionsListRequest, security: operations.MlProjectsModelsVersionsListSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsModelsVersionsListResponse>;
    /**
     * Updates the specified Version resource. Currently the only update-able fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`.
     */
    mlProjectsModelsVersionsPatch(req: operations.MlProjectsModelsVersionsPatchRequest, security: operations.MlProjectsModelsVersionsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsModelsVersionsPatchResponse>;
    /**
     * Designates a version to be the default for the model. The default version is used for prediction requests made against the model that don't specify a version. The first version to be created for a model is automatically set as the default. You must make any subsequent changes to the default version setting manually using this method.
     */
    mlProjectsModelsVersionsSetDefault(req: operations.MlProjectsModelsVersionsSetDefaultRequest, security: operations.MlProjectsModelsVersionsSetDefaultSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsModelsVersionsSetDefaultResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    mlProjectsOperationsCancel(req: operations.MlProjectsOperationsCancelRequest, security: operations.MlProjectsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsOperationsCancelResponse>;
    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     */
    mlProjectsOperationsGet(req: operations.MlProjectsOperationsGetRequest, security: operations.MlProjectsOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsOperationsGetResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    mlProjectsOperationsList(req: operations.MlProjectsOperationsListRequest, security: operations.MlProjectsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsOperationsListResponse>;
    /**
     * Performs online prediction on the data in the request. {% dynamic include "/ai-platform/includes/___predict-request" %}
     */
    mlProjectsPredict(req: operations.MlProjectsPredictRequest, security: operations.MlProjectsPredictSecurity, config?: AxiosRequestConfig): Promise<operations.MlProjectsPredictResponse>;
}
