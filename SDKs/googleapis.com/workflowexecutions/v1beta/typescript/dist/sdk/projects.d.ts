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
     * Cancels an execution of the given name.
     */
    workflowexecutionsProjectsLocationsWorkflowsExecutionsCancel(req: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelRequest, security: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCancelResponse>;
    /**
     * Creates a new execution using the latest revision of the given workflow.
     */
    workflowexecutionsProjectsLocationsWorkflowsExecutionsCreate(req: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateRequest, security: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsCreateResponse>;
    /**
     * Returns an execution of the given name.
     */
    workflowexecutionsProjectsLocationsWorkflowsExecutionsGet(req: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetRequest, security: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsGetResponse>;
    /**
     * Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).
     */
    workflowexecutionsProjectsLocationsWorkflowsExecutionsList(req: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListRequest, security: operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListSecurity, config?: AxiosRequestConfig): Promise<operations.WorkflowexecutionsProjectsLocationsWorkflowsExecutionsListResponse>;
}
