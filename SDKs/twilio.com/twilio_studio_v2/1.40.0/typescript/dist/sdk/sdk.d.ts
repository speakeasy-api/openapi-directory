import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://studio.twilio.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * This is the public Twilio REST API.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Triggers a new Execution for the Flow
     */
    createExecution(req: operations.CreateExecutionRequest, security: operations.CreateExecutionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateExecutionResponse>;
    /**
     * Create a Flow.
     */
    createFlow(req: operations.CreateFlowCreateFlowRequest, security: operations.CreateFlowSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateFlowResponse>;
    /**
     * Delete the Execution and all Steps relating to it.
     */
    deleteExecution(req: operations.DeleteExecutionRequest, security: operations.DeleteExecutionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteExecutionResponse>;
    /**
     * Delete a specific Flow.
     */
    deleteFlow(req: operations.DeleteFlowRequest, security: operations.DeleteFlowSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteFlowResponse>;
    /**
     * Retrieve an Execution
     */
    fetchExecution(req: operations.FetchExecutionRequest, security: operations.FetchExecutionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchExecutionResponse>;
    /**
     * Retrieve the most recent context for an Execution.
     */
    fetchExecutionContext(req: operations.FetchExecutionContextRequest, security: operations.FetchExecutionContextSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchExecutionContextResponse>;
    /**
     * Retrieve a Step.
     */
    fetchExecutionStep(req: operations.FetchExecutionStepRequest, security: operations.FetchExecutionStepSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchExecutionStepResponse>;
    /**
     * Retrieve the context for an Execution Step.
     */
    fetchExecutionStepContext(req: operations.FetchExecutionStepContextRequest, security: operations.FetchExecutionStepContextSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchExecutionStepContextResponse>;
    /**
     * Retrieve a specific Flow.
     */
    fetchFlow(req: operations.FetchFlowRequest, security: operations.FetchFlowSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchFlowResponse>;
    /**
     * Retrieve a specific Flow revision.
     */
    fetchFlowRevision(req: operations.FetchFlowRevisionRequest, security: operations.FetchFlowRevisionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchFlowRevisionResponse>;
    /**
     * Fetch flow test users
     */
    fetchTestUser(req: operations.FetchTestUserRequest, security: operations.FetchTestUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchTestUserResponse>;
    /**
     * Retrieve a list of all Executions for the Flow.
     */
    listExecution(req: operations.ListExecutionRequest, security: operations.ListExecutionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListExecutionResponse>;
    /**
     * Retrieve a list of all Steps for an Execution.
     */
    listExecutionStep(req: operations.ListExecutionStepRequest, security: operations.ListExecutionStepSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListExecutionStepResponse>;
    /**
     * Retrieve a list of all Flows.
     */
    listFlow(req: operations.ListFlowRequest, security: operations.ListFlowSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListFlowResponse>;
    /**
     * Retrieve a list of all Flows revisions.
     */
    listFlowRevision(req: operations.ListFlowRevisionRequest, security: operations.ListFlowRevisionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListFlowRevisionResponse>;
    /**
     * Update the status of an Execution to `ended`.
     */
    updateExecution(req: operations.UpdateExecutionRequest, security: operations.UpdateExecutionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateExecutionResponse>;
    /**
     * Update a Flow.
     */
    updateFlow(req: operations.UpdateFlowRequest, security: operations.UpdateFlowSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateFlowResponse>;
    /**
     * Validate flow JSON definition
     */
    updateFlowValidate(req: operations.UpdateFlowValidateUpdateFlowValidateRequest, security: operations.UpdateFlowValidateSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateFlowValidateResponse>;
    /**
     * Update flow test users
     */
    updateTestUser(req: operations.UpdateTestUserRequest, security: operations.UpdateTestUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateTestUserResponse>;
}
