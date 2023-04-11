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
     * Creates a batch workload that executes asynchronously.
     */
    dataprocProjectsLocationsBatchesCreate(req: operations.DataprocProjectsLocationsBatchesCreateRequest, security: operations.DataprocProjectsLocationsBatchesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsLocationsBatchesCreateResponse>;
    /**
     * Lists batch workloads.
     */
    dataprocProjectsLocationsBatchesList(req: operations.DataprocProjectsLocationsBatchesListRequest, security: operations.DataprocProjectsLocationsBatchesListSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsLocationsBatchesListResponse>;
    /**
     * Creates new autoscaling policy.
     */
    dataprocProjectsRegionsAutoscalingPoliciesCreate(req: operations.DataprocProjectsRegionsAutoscalingPoliciesCreateRequest, security: operations.DataprocProjectsRegionsAutoscalingPoliciesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsAutoscalingPoliciesCreateResponse>;
    /**
     * Lists autoscaling policies in the project.
     */
    dataprocProjectsRegionsAutoscalingPoliciesList(req: operations.DataprocProjectsRegionsAutoscalingPoliciesListRequest, security: operations.DataprocProjectsRegionsAutoscalingPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsAutoscalingPoliciesListResponse>;
    /**
     * Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
     */
    dataprocProjectsRegionsClustersCreate(req: operations.DataprocProjectsRegionsClustersCreateRequest, security: operations.DataprocProjectsRegionsClustersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsClustersCreateResponse>;
    /**
     * Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
     */
    dataprocProjectsRegionsClustersDelete(req: operations.DataprocProjectsRegionsClustersDeleteRequest, security: operations.DataprocProjectsRegionsClustersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsClustersDeleteResponse>;
    /**
     * Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).
     */
    dataprocProjectsRegionsClustersDiagnose(req: operations.DataprocProjectsRegionsClustersDiagnoseRequest, security: operations.DataprocProjectsRegionsClustersDiagnoseSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsClustersDiagnoseResponse>;
    /**
     * Gets the resource representation for a cluster in a project.
     */
    dataprocProjectsRegionsClustersGet(req: operations.DataprocProjectsRegionsClustersGetRequest, security: operations.DataprocProjectsRegionsClustersGetSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsClustersGetResponse>;
    /**
     * Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.
     */
    dataprocProjectsRegionsClustersInjectCredentials(req: operations.DataprocProjectsRegionsClustersInjectCredentialsRequest, security: operations.DataprocProjectsRegionsClustersInjectCredentialsSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsClustersInjectCredentialsResponse>;
    /**
     * Lists all regions/{region}/clusters in a project alphabetically.
     */
    dataprocProjectsRegionsClustersList(req: operations.DataprocProjectsRegionsClustersListRequest, security: operations.DataprocProjectsRegionsClustersListSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsClustersListResponse>;
    /**
     * Creates a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
     */
    dataprocProjectsRegionsClustersNodeGroupsCreate(req: operations.DataprocProjectsRegionsClustersNodeGroupsCreateRequest, security: operations.DataprocProjectsRegionsClustersNodeGroupsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsClustersNodeGroupsCreateResponse>;
    /**
     * Resizes a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
     */
    dataprocProjectsRegionsClustersNodeGroupsResize(req: operations.DataprocProjectsRegionsClustersNodeGroupsResizeRequest, security: operations.DataprocProjectsRegionsClustersNodeGroupsResizeSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsClustersNodeGroupsResizeResponse>;
    /**
     * Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.
     */
    dataprocProjectsRegionsClustersPatch(req: operations.DataprocProjectsRegionsClustersPatchRequest, security: operations.DataprocProjectsRegionsClustersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsClustersPatchResponse>;
    /**
     * Repairs a cluster.
     */
    dataprocProjectsRegionsClustersRepair(req: operations.DataprocProjectsRegionsClustersRepairRequest, security: operations.DataprocProjectsRegionsClustersRepairSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsClustersRepairResponse>;
    /**
     * Starts a cluster in a project.
     */
    dataprocProjectsRegionsClustersStart(req: operations.DataprocProjectsRegionsClustersStartRequest, security: operations.DataprocProjectsRegionsClustersStartSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsClustersStartResponse>;
    /**
     * Stops a cluster in a project.
     */
    dataprocProjectsRegionsClustersStop(req: operations.DataprocProjectsRegionsClustersStopRequest, security: operations.DataprocProjectsRegionsClustersStopSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsClustersStopResponse>;
    /**
     * Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).
     */
    dataprocProjectsRegionsJobsCancel(req: operations.DataprocProjectsRegionsJobsCancelRequest, security: operations.DataprocProjectsRegionsJobsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsJobsCancelResponse>;
    /**
     * Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.
     */
    dataprocProjectsRegionsJobsDelete(req: operations.DataprocProjectsRegionsJobsDeleteRequest, security: operations.DataprocProjectsRegionsJobsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsJobsDeleteResponse>;
    /**
     * Gets the resource representation for a job in a project.
     */
    dataprocProjectsRegionsJobsGet(req: operations.DataprocProjectsRegionsJobsGetRequest, security: operations.DataprocProjectsRegionsJobsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsJobsGetResponse>;
    /**
     * Lists regions/{region}/jobs in a project.
     */
    dataprocProjectsRegionsJobsList(req: operations.DataprocProjectsRegionsJobsListRequest, security: operations.DataprocProjectsRegionsJobsListSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsJobsListResponse>;
    /**
     * Updates a job in a project.
     */
    dataprocProjectsRegionsJobsPatch(req: operations.DataprocProjectsRegionsJobsPatchRequest, security: operations.DataprocProjectsRegionsJobsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsJobsPatchResponse>;
    /**
     * Submits a job to a cluster.
     */
    dataprocProjectsRegionsJobsSubmit(req: operations.DataprocProjectsRegionsJobsSubmitRequest, security: operations.DataprocProjectsRegionsJobsSubmitSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsJobsSubmitResponse>;
    /**
     * Submits job to a cluster.
     */
    dataprocProjectsRegionsJobsSubmitAsOperation(req: operations.DataprocProjectsRegionsJobsSubmitAsOperationRequest, security: operations.DataprocProjectsRegionsJobsSubmitAsOperationSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsJobsSubmitAsOperationResponse>;
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
     */
    dataprocProjectsRegionsOperationsCancel(req: operations.DataprocProjectsRegionsOperationsCancelRequest, security: operations.DataprocProjectsRegionsOperationsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsOperationsCancelResponse>;
    /**
     * Creates new workflow template.
     */
    dataprocProjectsRegionsWorkflowTemplatesCreate(req: operations.DataprocProjectsRegionsWorkflowTemplatesCreateRequest, security: operations.DataprocProjectsRegionsWorkflowTemplatesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsWorkflowTemplatesCreateResponse>;
    /**
     * Deletes a workflow template. It does not cancel in-progress workflows.
     */
    dataprocProjectsRegionsWorkflowTemplatesDelete(req: operations.DataprocProjectsRegionsWorkflowTemplatesDeleteRequest, security: operations.DataprocProjectsRegionsWorkflowTemplatesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsWorkflowTemplatesDeleteResponse>;
    /**
     * Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.
     */
    dataprocProjectsRegionsWorkflowTemplatesGet(req: operations.DataprocProjectsRegionsWorkflowTemplatesGetRequest, security: operations.DataprocProjectsRegionsWorkflowTemplatesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsWorkflowTemplatesGetResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    dataprocProjectsRegionsWorkflowTemplatesGetIamPolicy(req: operations.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest, security: operations.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyResponse>;
    /**
     * Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
     */
    dataprocProjectsRegionsWorkflowTemplatesInstantiate(req: operations.DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest, security: operations.DataprocProjectsRegionsWorkflowTemplatesInstantiateSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsWorkflowTemplatesInstantiateResponse>;
    /**
     * Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
     */
    dataprocProjectsRegionsWorkflowTemplatesInstantiateInline(req: operations.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest, security: operations.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineResponse>;
    /**
     * Lists workflows that match the specified filter in the request.
     */
    dataprocProjectsRegionsWorkflowTemplatesList(req: operations.DataprocProjectsRegionsWorkflowTemplatesListRequest, security: operations.DataprocProjectsRegionsWorkflowTemplatesListSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsWorkflowTemplatesListResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
     */
    dataprocProjectsRegionsWorkflowTemplatesSetIamPolicy(req: operations.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest, security: operations.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    dataprocProjectsRegionsWorkflowTemplatesTestIamPermissions(req: operations.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest, security: operations.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsResponse>;
    /**
     * Updates (replaces) workflow template. The updated template must contain version that matches the current server version.
     */
    dataprocProjectsRegionsWorkflowTemplatesUpdate(req: operations.DataprocProjectsRegionsWorkflowTemplatesUpdateRequest, security: operations.DataprocProjectsRegionsWorkflowTemplatesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DataprocProjectsRegionsWorkflowTemplatesUpdateResponse>;
}
