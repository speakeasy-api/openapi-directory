import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SwitchStacks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a switch to a stack
     *
     * @remarks
     * Add a switch to a stack
     */
    addNetworkSwitchStack(req: operations.AddNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.AddNetworkSwitchStackResponse>;
    /**
     * Create a stack
     *
     * @remarks
     * Create a stack
     */
    createNetworkSwitchStack(req: operations.CreateNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchStackResponse>;
    /**
     * Delete a stack
     *
     * @remarks
     * Delete a stack
     */
    deleteNetworkSwitchStack(req: operations.DeleteNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchStackResponse>;
    /**
     * Show a switch stack
     *
     * @remarks
     * Show a switch stack
     */
    getNetworkSwitchStack(req: operations.GetNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackResponse>;
    /**
     * List the switch stacks in a network
     *
     * @remarks
     * List the switch stacks in a network
     */
    getNetworkSwitchStacks(req: operations.GetNetworkSwitchStacksRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStacksResponse>;
    /**
     * Remove a switch from a stack
     *
     * @remarks
     * Remove a switch from a stack
     */
    removeNetworkSwitchStack(req: operations.RemoveNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.RemoveNetworkSwitchStackResponse>;
}
