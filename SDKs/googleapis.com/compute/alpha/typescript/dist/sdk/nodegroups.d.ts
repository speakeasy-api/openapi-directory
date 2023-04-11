import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class NodeGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Adds specified number of nodes to the node group.
     */
    computeNodeGroupsAddNodes(req: operations.ComputeNodeGroupsAddNodesRequest, security: operations.ComputeNodeGroupsAddNodesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeGroupsAddNodesResponse>;
    /**
     * Retrieves an aggregated list of node groups. Note: use nodeGroups.listNodes for more details about each group.
     */
    computeNodeGroupsAggregatedList(req: operations.ComputeNodeGroupsAggregatedListRequest, security: operations.ComputeNodeGroupsAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeGroupsAggregatedListResponse>;
    /**
     * Deletes the specified NodeGroup resource.
     */
    computeNodeGroupsDelete(req: operations.ComputeNodeGroupsDeleteRequest, security: operations.ComputeNodeGroupsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeGroupsDeleteResponse>;
    /**
     * Deletes specified nodes from the node group.
     */
    computeNodeGroupsDeleteNodes(req: operations.ComputeNodeGroupsDeleteNodesRequest, security: operations.ComputeNodeGroupsDeleteNodesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeGroupsDeleteNodesResponse>;
    /**
     * Returns the specified NodeGroup. Get a list of available NodeGroups by making a list() request. Note: the "nodes" field should not be used. Use nodeGroups.listNodes instead.
     */
    computeNodeGroupsGet(req: operations.ComputeNodeGroupsGetRequest, security: operations.ComputeNodeGroupsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeGroupsGetResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeNodeGroupsGetIamPolicy(req: operations.ComputeNodeGroupsGetIamPolicyRequest, security: operations.ComputeNodeGroupsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeGroupsGetIamPolicyResponse>;
    /**
     * Creates a NodeGroup resource in the specified project using the data included in the request.
     */
    computeNodeGroupsInsert(req: operations.ComputeNodeGroupsInsertRequest, security: operations.ComputeNodeGroupsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeGroupsInsertResponse>;
    /**
     * Retrieves a list of node groups available to the specified project. Note: use nodeGroups.listNodes for more details about each group.
     */
    computeNodeGroupsList(req: operations.ComputeNodeGroupsListRequest, security: operations.ComputeNodeGroupsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeGroupsListResponse>;
    /**
     * Lists nodes in the node group.
     */
    computeNodeGroupsListNodes(req: operations.ComputeNodeGroupsListNodesRequest, security: operations.ComputeNodeGroupsListNodesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeGroupsListNodesResponse>;
    /**
     * Updates the specified node group.
     */
    computeNodeGroupsPatch(req: operations.ComputeNodeGroupsPatchRequest, security: operations.ComputeNodeGroupsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeGroupsPatchResponse>;
    /**
     * Perform maintenance on a subset of nodes in the node group.
     */
    computeNodeGroupsPerformMaintenance(req: operations.ComputeNodeGroupsPerformMaintenanceRequest, security: operations.ComputeNodeGroupsPerformMaintenanceSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeGroupsPerformMaintenanceResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeNodeGroupsSetIamPolicy(req: operations.ComputeNodeGroupsSetIamPolicyRequest, security: operations.ComputeNodeGroupsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeGroupsSetIamPolicyResponse>;
    /**
     * Updates the node template of the node group.
     */
    computeNodeGroupsSetNodeTemplate(req: operations.ComputeNodeGroupsSetNodeTemplateRequest, security: operations.ComputeNodeGroupsSetNodeTemplateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeGroupsSetNodeTemplateResponse>;
    /**
     * Simulates maintenance event on specified nodes from the node group.
     */
    computeNodeGroupsSimulateMaintenanceEvent(req: operations.ComputeNodeGroupsSimulateMaintenanceEventRequest, security: operations.ComputeNodeGroupsSimulateMaintenanceEventSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeGroupsSimulateMaintenanceEventResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeNodeGroupsTestIamPermissions(req: operations.ComputeNodeGroupsTestIamPermissionsRequest, security: operations.ComputeNodeGroupsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNodeGroupsTestIamPermissionsResponse>;
}
