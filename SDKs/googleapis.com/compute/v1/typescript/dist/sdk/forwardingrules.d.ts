import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ForwardingRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an aggregated list of forwarding rules.
     */
    computeForwardingRulesAggregatedList(req: operations.ComputeForwardingRulesAggregatedListRequest, security: operations.ComputeForwardingRulesAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeForwardingRulesAggregatedListResponse>;
    /**
     * Deletes the specified ForwardingRule resource.
     */
    computeForwardingRulesDelete(req: operations.ComputeForwardingRulesDeleteRequest, security: operations.ComputeForwardingRulesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeForwardingRulesDeleteResponse>;
    /**
     * Returns the specified ForwardingRule resource.
     */
    computeForwardingRulesGet(req: operations.ComputeForwardingRulesGetRequest, security: operations.ComputeForwardingRulesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeForwardingRulesGetResponse>;
    /**
     * Creates a ForwardingRule resource in the specified project and region using the data included in the request.
     */
    computeForwardingRulesInsert(req: operations.ComputeForwardingRulesInsertRequest, security: operations.ComputeForwardingRulesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeForwardingRulesInsertResponse>;
    /**
     * Retrieves a list of ForwardingRule resources available to the specified project and region.
     */
    computeForwardingRulesList(req: operations.ComputeForwardingRulesListRequest, security: operations.ComputeForwardingRulesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeForwardingRulesListResponse>;
    /**
     * Updates the specified forwarding rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. Currently, you can only patch the network_tier field.
     */
    computeForwardingRulesPatch(req: operations.ComputeForwardingRulesPatchRequest, security: operations.ComputeForwardingRulesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeForwardingRulesPatchResponse>;
    /**
     * Sets the labels on the specified resource. To learn more about labels, read the Labeling Resources documentation.
     */
    computeForwardingRulesSetLabels(req: operations.ComputeForwardingRulesSetLabelsRequest, security: operations.ComputeForwardingRulesSetLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeForwardingRulesSetLabelsResponse>;
    /**
     * Changes target URL for forwarding rule. The new target should be of the same type as the old target.
     */
    computeForwardingRulesSetTarget(req: operations.ComputeForwardingRulesSetTargetRequest, security: operations.ComputeForwardingRulesSetTargetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeForwardingRulesSetTargetResponse>;
}
