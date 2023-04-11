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
     * Lists information about the supported locations for this service.
     */
    workflowsProjectsLocationsList(req: operations.WorkflowsProjectsLocationsListRequest, security: operations.WorkflowsProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.WorkflowsProjectsLocationsListResponse>;
    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     */
    workflowsProjectsLocationsOperationsList(req: operations.WorkflowsProjectsLocationsOperationsListRequest, security: operations.WorkflowsProjectsLocationsOperationsListSecurity, config?: AxiosRequestConfig): Promise<operations.WorkflowsProjectsLocationsOperationsListResponse>;
    /**
     * Creates a new workflow. If a workflow with the specified name already exists in the specified project and location, the long running operation will return ALREADY_EXISTS error.
     */
    workflowsProjectsLocationsWorkflowsCreate(req: operations.WorkflowsProjectsLocationsWorkflowsCreateRequest, security: operations.WorkflowsProjectsLocationsWorkflowsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.WorkflowsProjectsLocationsWorkflowsCreateResponse>;
    /**
     * Deletes a workflow with the specified name. This method also cancels and deletes all running executions of the workflow.
     */
    workflowsProjectsLocationsWorkflowsDelete(req: operations.WorkflowsProjectsLocationsWorkflowsDeleteRequest, security: operations.WorkflowsProjectsLocationsWorkflowsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.WorkflowsProjectsLocationsWorkflowsDeleteResponse>;
    /**
     * Gets details of a single Workflow.
     */
    workflowsProjectsLocationsWorkflowsGet(req: operations.WorkflowsProjectsLocationsWorkflowsGetRequest, security: operations.WorkflowsProjectsLocationsWorkflowsGetSecurity, config?: AxiosRequestConfig): Promise<operations.WorkflowsProjectsLocationsWorkflowsGetResponse>;
    /**
     * Lists Workflows in a given project and location. The default order is not specified.
     */
    workflowsProjectsLocationsWorkflowsList(req: operations.WorkflowsProjectsLocationsWorkflowsListRequest, security: operations.WorkflowsProjectsLocationsWorkflowsListSecurity, config?: AxiosRequestConfig): Promise<operations.WorkflowsProjectsLocationsWorkflowsListResponse>;
    /**
     * Updates an existing workflow. Running this method has no impact on already running executions of the workflow. A new revision of the workflow may be created as a result of a successful update operation. In that case, such revision will be used in new workflow executions.
     */
    workflowsProjectsLocationsWorkflowsPatch(req: operations.WorkflowsProjectsLocationsWorkflowsPatchRequest, security: operations.WorkflowsProjectsLocationsWorkflowsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.WorkflowsProjectsLocationsWorkflowsPatchResponse>;
}
