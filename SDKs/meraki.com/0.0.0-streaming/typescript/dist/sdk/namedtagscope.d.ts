import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class NamedTagScope {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a target group
     *
     * @remarks
     * Add a target group
     */
    createNetworkSmTargetGroup(req: operations.CreateNetworkSmTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSmTargetGroupResponse>;
    /**
     * Delete a target group from a network
     *
     * @remarks
     * Delete a target group from a network
     */
    deleteNetworkSmTargetGroup(req: operations.DeleteNetworkSmTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSmTargetGroupResponse>;
    /**
     * Return a target group
     *
     * @remarks
     * Return a target group
     */
    getNetworkSmTargetGroup(req: operations.GetNetworkSmTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmTargetGroupResponse>;
    /**
     * List the target groups in this network
     *
     * @remarks
     * List the target groups in this network
     */
    getNetworkSmTargetGroups(req: operations.GetNetworkSmTargetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmTargetGroupsResponse>;
    /**
     * Update a target group
     *
     * @remarks
     * Update a target group
     */
    updateNetworkSmTargetGroup(req: operations.UpdateNetworkSmTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSmTargetGroupResponse>;
}
