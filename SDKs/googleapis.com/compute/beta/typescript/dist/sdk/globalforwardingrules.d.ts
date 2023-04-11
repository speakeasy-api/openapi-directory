import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GlobalForwardingRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified GlobalForwardingRule resource.
     */
    computeGlobalForwardingRulesDelete(req: operations.ComputeGlobalForwardingRulesDeleteRequest, security: operations.ComputeGlobalForwardingRulesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalForwardingRulesDeleteResponse>;
    /**
     * Returns the specified GlobalForwardingRule resource. Gets a list of available forwarding rules by making a list() request.
     */
    computeGlobalForwardingRulesGet(req: operations.ComputeGlobalForwardingRulesGetRequest, security: operations.ComputeGlobalForwardingRulesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalForwardingRulesGetResponse>;
    /**
     * Creates a GlobalForwardingRule resource in the specified project using the data included in the request.
     */
    computeGlobalForwardingRulesInsert(req: operations.ComputeGlobalForwardingRulesInsertRequest, security: operations.ComputeGlobalForwardingRulesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalForwardingRulesInsertResponse>;
    /**
     * Retrieves a list of GlobalForwardingRule resources available to the specified project.
     */
    computeGlobalForwardingRulesList(req: operations.ComputeGlobalForwardingRulesListRequest, security: operations.ComputeGlobalForwardingRulesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalForwardingRulesListResponse>;
    /**
     * Updates the specified forwarding rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules. Currently, you can only patch the network_tier field.
     */
    computeGlobalForwardingRulesPatch(req: operations.ComputeGlobalForwardingRulesPatchRequest, security: operations.ComputeGlobalForwardingRulesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalForwardingRulesPatchResponse>;
    /**
     * Sets the labels on the specified resource. To learn more about labels, read the Labeling resources documentation.
     */
    computeGlobalForwardingRulesSetLabels(req: operations.ComputeGlobalForwardingRulesSetLabelsRequest, security: operations.ComputeGlobalForwardingRulesSetLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalForwardingRulesSetLabelsResponse>;
    /**
     * Changes target URL for the GlobalForwardingRule resource. The new target should be of the same type as the old target.
     */
    computeGlobalForwardingRulesSetTarget(req: operations.ComputeGlobalForwardingRulesSetTargetRequest, security: operations.ComputeGlobalForwardingRulesSetTargetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalForwardingRulesSetTargetResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeGlobalForwardingRulesTestIamPermissions(req: operations.ComputeGlobalForwardingRulesTestIamPermissionsRequest, security: operations.ComputeGlobalForwardingRulesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalForwardingRulesTestIamPermissionsResponse>;
}
