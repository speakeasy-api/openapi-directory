import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OrganizationSecurityPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Inserts an association for the specified security policy.
     */
    computeOrganizationSecurityPoliciesAddAssociation(req: operations.ComputeOrganizationSecurityPoliciesAddAssociationRequest, security: operations.ComputeOrganizationSecurityPoliciesAddAssociationSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeOrganizationSecurityPoliciesAddAssociationResponse>;
    /**
     * Inserts a rule into a security policy.
     */
    computeOrganizationSecurityPoliciesAddRule(req: operations.ComputeOrganizationSecurityPoliciesAddRuleRequest, security: operations.ComputeOrganizationSecurityPoliciesAddRuleSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeOrganizationSecurityPoliciesAddRuleResponse>;
    /**
     * Copies rules to the specified security policy.
     */
    computeOrganizationSecurityPoliciesCopyRules(req: operations.ComputeOrganizationSecurityPoliciesCopyRulesRequest, security: operations.ComputeOrganizationSecurityPoliciesCopyRulesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeOrganizationSecurityPoliciesCopyRulesResponse>;
    /**
     * Deletes the specified policy.
     */
    computeOrganizationSecurityPoliciesDelete(req: operations.ComputeOrganizationSecurityPoliciesDeleteRequest, security: operations.ComputeOrganizationSecurityPoliciesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeOrganizationSecurityPoliciesDeleteResponse>;
    /**
     * List all of the ordered rules present in a single specified policy.
     */
    computeOrganizationSecurityPoliciesGet(req: operations.ComputeOrganizationSecurityPoliciesGetRequest, security: operations.ComputeOrganizationSecurityPoliciesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeOrganizationSecurityPoliciesGetResponse>;
    /**
     * Gets an association with the specified name.
     */
    computeOrganizationSecurityPoliciesGetAssociation(req: operations.ComputeOrganizationSecurityPoliciesGetAssociationRequest, security: operations.ComputeOrganizationSecurityPoliciesGetAssociationSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeOrganizationSecurityPoliciesGetAssociationResponse>;
    /**
     * Gets a rule at the specified priority.
     */
    computeOrganizationSecurityPoliciesGetRule(req: operations.ComputeOrganizationSecurityPoliciesGetRuleRequest, security: operations.ComputeOrganizationSecurityPoliciesGetRuleSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeOrganizationSecurityPoliciesGetRuleResponse>;
    /**
     * Creates a new policy in the specified project using the data included in the request.
     */
    computeOrganizationSecurityPoliciesInsert(req: operations.ComputeOrganizationSecurityPoliciesInsertRequest, security: operations.ComputeOrganizationSecurityPoliciesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeOrganizationSecurityPoliciesInsertResponse>;
    /**
     * List all the policies that have been configured for the specified project.
     */
    computeOrganizationSecurityPoliciesList(req: operations.ComputeOrganizationSecurityPoliciesListRequest, security: operations.ComputeOrganizationSecurityPoliciesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeOrganizationSecurityPoliciesListResponse>;
    /**
     * Lists associations of a specified target, i.e., organization or folder.
     */
    computeOrganizationSecurityPoliciesListAssociations(req: operations.ComputeOrganizationSecurityPoliciesListAssociationsRequest, security: operations.ComputeOrganizationSecurityPoliciesListAssociationsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeOrganizationSecurityPoliciesListAssociationsResponse>;
    /**
     * Moves the specified security policy.
     */
    computeOrganizationSecurityPoliciesMove(req: operations.ComputeOrganizationSecurityPoliciesMoveRequest, security: operations.ComputeOrganizationSecurityPoliciesMoveSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeOrganizationSecurityPoliciesMoveResponse>;
    /**
     * Patches the specified policy with the data included in the request.
     */
    computeOrganizationSecurityPoliciesPatch(req: operations.ComputeOrganizationSecurityPoliciesPatchRequest, security: operations.ComputeOrganizationSecurityPoliciesPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeOrganizationSecurityPoliciesPatchResponse>;
    /**
     * Patches a rule at the specified priority.
     */
    computeOrganizationSecurityPoliciesPatchRule(req: operations.ComputeOrganizationSecurityPoliciesPatchRuleRequest, security: operations.ComputeOrganizationSecurityPoliciesPatchRuleSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeOrganizationSecurityPoliciesPatchRuleResponse>;
    /**
     * Removes an association for the specified security policy.
     */
    computeOrganizationSecurityPoliciesRemoveAssociation(req: operations.ComputeOrganizationSecurityPoliciesRemoveAssociationRequest, security: operations.ComputeOrganizationSecurityPoliciesRemoveAssociationSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeOrganizationSecurityPoliciesRemoveAssociationResponse>;
    /**
     * Deletes a rule at the specified priority.
     */
    computeOrganizationSecurityPoliciesRemoveRule(req: operations.ComputeOrganizationSecurityPoliciesRemoveRuleRequest, security: operations.ComputeOrganizationSecurityPoliciesRemoveRuleSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeOrganizationSecurityPoliciesRemoveRuleResponse>;
}
