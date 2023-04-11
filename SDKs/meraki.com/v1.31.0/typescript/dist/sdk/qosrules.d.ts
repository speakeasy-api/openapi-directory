import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class QosRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a quality of service rule
     *
     * @remarks
     * Add a quality of service rule
     */
    createNetworkSwitchQosRule(req: operations.CreateNetworkSwitchQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchQosRuleResponse>;
    /**
     * Delete a quality of service rule
     *
     * @remarks
     * Delete a quality of service rule
     */
    deleteNetworkSwitchQosRule(req: operations.DeleteNetworkSwitchQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchQosRuleResponse>;
    /**
     * Return a quality of service rule
     *
     * @remarks
     * Return a quality of service rule
     */
    getNetworkSwitchQosRule(req: operations.GetNetworkSwitchQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchQosRuleResponse>;
    /**
     * List quality of service rules
     *
     * @remarks
     * List quality of service rules
     */
    getNetworkSwitchQosRules(req: operations.GetNetworkSwitchQosRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchQosRulesResponse>;
    /**
     * Return the quality of service rule IDs by order in which they will be processed by the switch
     *
     * @remarks
     * Return the quality of service rule IDs by order in which they will be processed by the switch
     */
    getNetworkSwitchQosRulesOrder(req: operations.GetNetworkSwitchQosRulesOrderRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchQosRulesOrderResponse>;
    /**
     * Update a quality of service rule
     *
     * @remarks
     * Update a quality of service rule
     */
    updateNetworkSwitchQosRule(req: operations.UpdateNetworkSwitchQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchQosRuleResponse>;
    /**
     * Update the order in which the rules should be processed by the switch
     *
     * @remarks
     * Update the order in which the rules should be processed by the switch
     */
    updateNetworkSwitchQosRulesOrder(req: operations.UpdateNetworkSwitchQosRulesOrderRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchQosRulesOrderResponse>;
}
