import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Customers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
     */
    chromepolicyCustomersPoliciesGroupsBatchDelete(req: operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest, security: operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteResponse>;
    /**
     * Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
     */
    chromepolicyCustomersPoliciesGroupsBatchModify(req: operations.ChromepolicyCustomersPoliciesGroupsBatchModifyRequest, security: operations.ChromepolicyCustomersPoliciesGroupsBatchModifySecurity, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPoliciesGroupsBatchModifyResponse>;
    /**
     * Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
     */
    chromepolicyCustomersPoliciesGroupsListGroupPriorityOrdering(req: operations.ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingRequest, security: operations.ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingSecurity, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingResponse>;
    /**
     * Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
     */
    chromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrdering(req: operations.ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingRequest, security: operations.ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingSecurity, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingResponse>;
    /**
     * Creates a certificate at a specified OU for a customer.
     */
    chromepolicyCustomersPoliciesNetworksDefineCertificate(req: operations.ChromepolicyCustomersPoliciesNetworksDefineCertificateRequest, security: operations.ChromepolicyCustomersPoliciesNetworksDefineCertificateSecurity, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPoliciesNetworksDefineCertificateResponse>;
    /**
     * Define a new network.
     */
    chromepolicyCustomersPoliciesNetworksDefineNetwork(req: operations.ChromepolicyCustomersPoliciesNetworksDefineNetworkRequest, security: operations.ChromepolicyCustomersPoliciesNetworksDefineNetworkSecurity, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPoliciesNetworksDefineNetworkResponse>;
    /**
     * Remove an existing certificate by guid.
     */
    chromepolicyCustomersPoliciesNetworksRemoveCertificate(req: operations.ChromepolicyCustomersPoliciesNetworksRemoveCertificateRequest, security: operations.ChromepolicyCustomersPoliciesNetworksRemoveCertificateSecurity, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPoliciesNetworksRemoveCertificateResponse>;
    /**
     * Remove an existing network by guid.
     */
    chromepolicyCustomersPoliciesNetworksRemoveNetwork(req: operations.ChromepolicyCustomersPoliciesNetworksRemoveNetworkRequest, security: operations.ChromepolicyCustomersPoliciesNetworksRemoveNetworkSecurity, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPoliciesNetworksRemoveNetworkResponse>;
    /**
     * Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
     */
    chromepolicyCustomersPoliciesOrgunitsBatchInherit(req: operations.ChromepolicyCustomersPoliciesOrgunitsBatchInheritRequest, security: operations.ChromepolicyCustomersPoliciesOrgunitsBatchInheritSecurity, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPoliciesOrgunitsBatchInheritResponse>;
    /**
     * Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
     */
    chromepolicyCustomersPoliciesOrgunitsBatchModify(req: operations.ChromepolicyCustomersPoliciesOrgunitsBatchModifyRequest, security: operations.ChromepolicyCustomersPoliciesOrgunitsBatchModifySecurity, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPoliciesOrgunitsBatchModifyResponse>;
    /**
     * Gets the resolved policy values for a list of policies that match a search query.
     */
    chromepolicyCustomersPoliciesResolve(req: operations.ChromepolicyCustomersPoliciesResolveRequest, security: operations.ChromepolicyCustomersPoliciesResolveSecurity, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPoliciesResolveResponse>;
    /**
     * Get a specific policy schema for a customer by its resource name.
     */
    chromepolicyCustomersPolicySchemasGet(req: operations.ChromepolicyCustomersPolicySchemasGetRequest, security: operations.ChromepolicyCustomersPolicySchemasGetSecurity, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPolicySchemasGetResponse>;
    /**
     * Gets a list of policy schemas that match a specified filter value for a given customer.
     */
    chromepolicyCustomersPolicySchemasList(req: operations.ChromepolicyCustomersPolicySchemasListRequest, security: operations.ChromepolicyCustomersPolicySchemasListSecurity, config?: AxiosRequestConfig): Promise<operations.ChromepolicyCustomersPolicySchemasListResponse>;
}
