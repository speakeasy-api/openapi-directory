import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AuthenticationManagement {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete authenticator configuration
     */
    deleteRealmAuthenticationConfigId(req: operations.DeleteRealmAuthenticationConfigIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmAuthenticationConfigIdResponse>;
    /**
     * Delete execution
     */
    deleteRealmAuthenticationExecutionsExecutionId(req: operations.DeleteRealmAuthenticationExecutionsExecutionIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmAuthenticationExecutionsExecutionIdResponse>;
    /**
     * Delete an authentication flow
     */
    deleteRealmAuthenticationFlowsId(req: operations.DeleteRealmAuthenticationFlowsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmAuthenticationFlowsIdResponse>;
    /**
     * Delete required action
     */
    deleteRealmAuthenticationRequiredActionsAlias(req: operations.DeleteRealmAuthenticationRequiredActionsAliasRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmAuthenticationRequiredActionsAliasResponse>;
    /**
     * Get authenticator providers   Returns a list of authenticator providers.
     */
    getRealmAuthenticationAuthenticatorProviders(req: operations.GetRealmAuthenticationAuthenticatorProvidersRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationAuthenticatorProvidersResponse>;
    /**
     * Get client authenticator providers   Returns a list of client authenticator providers.
     */
    getRealmAuthenticationClientAuthenticatorProviders(req: operations.GetRealmAuthenticationClientAuthenticatorProvidersRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationClientAuthenticatorProvidersResponse>;
    /**
     * Get authenticator provider’s configuration description
     */
    getRealmAuthenticationConfigDescriptionProviderId(req: operations.GetRealmAuthenticationConfigDescriptionProviderIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationConfigDescriptionProviderIdResponse>;
    /**
     * Get authenticator configuration
     */
    getRealmAuthenticationConfigId(req: operations.GetRealmAuthenticationConfigIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationConfigIdResponse>;
    /**
     * Get Single Execution
     */
    getRealmAuthenticationExecutionsExecutionId(req: operations.GetRealmAuthenticationExecutionsExecutionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationExecutionsExecutionIdResponse>;
    /**
     * Get authentication flows   Returns a list of authentication flows.
     */
    getRealmAuthenticationFlows(req: operations.GetRealmAuthenticationFlowsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationFlowsResponse>;
    /**
     * Get authentication executions for a flow
     */
    getRealmAuthenticationFlowsFlowAliasExecutions(req: operations.GetRealmAuthenticationFlowsFlowAliasExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationFlowsFlowAliasExecutionsResponse>;
    /**
     * Get authentication flow for id
     */
    getRealmAuthenticationFlowsId(req: operations.GetRealmAuthenticationFlowsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationFlowsIdResponse>;
    /**
     * Get form action providers   Returns a list of form action providers.
     */
    getRealmAuthenticationFormActionProviders(req: operations.GetRealmAuthenticationFormActionProvidersRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationFormActionProvidersResponse>;
    /**
     * Get form providers   Returns a list of form providers.
     */
    getRealmAuthenticationFormProviders(req: operations.GetRealmAuthenticationFormProvidersRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationFormProvidersResponse>;
    /**
     * Get configuration descriptions for all clients
     */
    getRealmAuthenticationPerClientConfigDescription(req: operations.GetRealmAuthenticationPerClientConfigDescriptionRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationPerClientConfigDescriptionResponse>;
    /**
     * Get required actions   Returns a list of required actions.
     */
    getRealmAuthenticationRequiredActions(req: operations.GetRealmAuthenticationRequiredActionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationRequiredActionsResponse>;
    /**
     * Get required action for alias
     */
    getRealmAuthenticationRequiredActionsAlias(req: operations.GetRealmAuthenticationRequiredActionsAliasRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationRequiredActionsAliasResponse>;
    /**
     * Get unregistered required actions   Returns a list of unregistered required actions.
     */
    getRealmAuthenticationUnregisteredRequiredActions(req: operations.GetRealmAuthenticationUnregisteredRequiredActionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmAuthenticationUnregisteredRequiredActionsResponse>;
    /**
     * Add new authentication execution
     */
    postRealmAuthenticationExecutions(req: operations.PostRealmAuthenticationExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmAuthenticationExecutionsResponse>;
    /**
     * Update execution with new configuration
     */
    postRealmAuthenticationExecutionsExecutionIdConfig(req: operations.PostRealmAuthenticationExecutionsExecutionIdConfigRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmAuthenticationExecutionsExecutionIdConfigResponse>;
    /**
     * Lower execution’s priority
     */
    postRealmAuthenticationExecutionsExecutionIdLowerPriority(req: operations.PostRealmAuthenticationExecutionsExecutionIdLowerPriorityRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmAuthenticationExecutionsExecutionIdLowerPriorityResponse>;
    /**
     * Raise execution’s priority
     */
    postRealmAuthenticationExecutionsExecutionIdRaisePriority(req: operations.PostRealmAuthenticationExecutionsExecutionIdRaisePriorityRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmAuthenticationExecutionsExecutionIdRaisePriorityResponse>;
    /**
     * Create a new authentication flow
     */
    postRealmAuthenticationFlows(req: operations.PostRealmAuthenticationFlowsRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmAuthenticationFlowsResponse>;
    /**
     * Copy existing authentication flow under a new name   The new name is given as 'newName' attribute of the passed JSON object
     */
    postRealmAuthenticationFlowsFlowAliasCopy(req: operations.PostRealmAuthenticationFlowsFlowAliasCopyRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmAuthenticationFlowsFlowAliasCopyResponse>;
    /**
     * Add new authentication execution to a flow
     */
    postRealmAuthenticationFlowsFlowAliasExecutionsExecution(req: operations.PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmAuthenticationFlowsFlowAliasExecutionsExecutionResponse>;
    /**
     * Add new flow with new execution to existing flow
     */
    postRealmAuthenticationFlowsFlowAliasExecutionsFlow(req: operations.PostRealmAuthenticationFlowsFlowAliasExecutionsFlowRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmAuthenticationFlowsFlowAliasExecutionsFlowResponse>;
    /**
     * Register a new required actions
     */
    postRealmAuthenticationRegisterRequiredAction(req: operations.PostRealmAuthenticationRegisterRequiredActionRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmAuthenticationRegisterRequiredActionResponse>;
    /**
     * Lower required action’s priority
     */
    postRealmAuthenticationRequiredActionsAliasLowerPriority(req: operations.PostRealmAuthenticationRequiredActionsAliasLowerPriorityRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmAuthenticationRequiredActionsAliasLowerPriorityResponse>;
    /**
     * Raise required action’s priority
     */
    postRealmAuthenticationRequiredActionsAliasRaisePriority(req: operations.PostRealmAuthenticationRequiredActionsAliasRaisePriorityRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmAuthenticationRequiredActionsAliasRaisePriorityResponse>;
    /**
     * Update authenticator configuration
     */
    putRealmAuthenticationConfigId(req: operations.PutRealmAuthenticationConfigIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmAuthenticationConfigIdResponse>;
    /**
     * Update authentication executions of a flow
     */
    putRealmAuthenticationFlowsFlowAliasExecutions(req: operations.PutRealmAuthenticationFlowsFlowAliasExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmAuthenticationFlowsFlowAliasExecutionsResponse>;
    /**
     * Update an authentication flow
     */
    putRealmAuthenticationFlowsId(req: operations.PutRealmAuthenticationFlowsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmAuthenticationFlowsIdResponse>;
    /**
     * Update required action
     */
    putRealmAuthenticationRequiredActionsAlias(req: operations.PutRealmAuthenticationRequiredActionsAliasRequest, config?: AxiosRequestConfig): Promise<operations.PutRealmAuthenticationRequiredActionsAliasResponse>;
}
