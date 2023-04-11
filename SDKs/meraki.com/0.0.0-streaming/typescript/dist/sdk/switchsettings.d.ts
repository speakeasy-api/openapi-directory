import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SwitchSettings {
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
    createNetworkSwitchSettingsQosRule(req: operations.CreateNetworkSwitchSettingsQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchSettingsQosRuleResponse>;
    /**
     * Delete a quality of service rule
     *
     * @remarks
     * Delete a quality of service rule
     */
    deleteNetworkSwitchSettingsQosRule(req: operations.DeleteNetworkSwitchSettingsQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchSettingsQosRuleResponse>;
    /**
     * Returns the switch network settings
     *
     * @remarks
     * Returns the switch network settings
     */
    getNetworkSwitchSettings(req: operations.GetNetworkSwitchSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchSettingsResponse>;
    /**
     * Return the MTU configuration
     *
     * @remarks
     * Return the MTU configuration
     */
    getNetworkSwitchSettingsMtu(req: operations.GetNetworkSwitchSettingsMtuRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchSettingsMtuResponse>;
    /**
     * Return multicast settings for a network
     *
     * @remarks
     * Return multicast settings for a network
     */
    getNetworkSwitchSettingsMulticast(req: operations.GetNetworkSwitchSettingsMulticastRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchSettingsMulticastResponse>;
    /**
     * Return a quality of service rule
     *
     * @remarks
     * Return a quality of service rule
     */
    getNetworkSwitchSettingsQosRule(req: operations.GetNetworkSwitchSettingsQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchSettingsQosRuleResponse>;
    /**
     * List quality of service rules
     *
     * @remarks
     * List quality of service rules
     */
    getNetworkSwitchSettingsQosRules(req: operations.GetNetworkSwitchSettingsQosRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchSettingsQosRulesResponse>;
    /**
     * Return the quality of service rule IDs by order in which they will be processed by the switch
     *
     * @remarks
     * Return the quality of service rule IDs by order in which they will be processed by the switch
     */
    getNetworkSwitchSettingsQosRulesOrder(req: operations.GetNetworkSwitchSettingsQosRulesOrderRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchSettingsQosRulesOrderResponse>;
    /**
     * Return the storm control configuration for a switch network
     *
     * @remarks
     * Return the storm control configuration for a switch network
     */
    getNetworkSwitchSettingsStormControl(req: operations.GetNetworkSwitchSettingsStormControlRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchSettingsStormControlResponse>;
    /**
     * Update switch network settings
     *
     * @remarks
     * Update switch network settings
     */
    updateNetworkSwitchSettings(req: operations.UpdateNetworkSwitchSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchSettingsResponse>;
    /**
     * Update the MTU configuration
     *
     * @remarks
     * Update the MTU configuration
     */
    updateNetworkSwitchSettingsMtu(req: operations.UpdateNetworkSwitchSettingsMtuRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchSettingsMtuResponse>;
    /**
     * Update multicast settings for a network
     *
     * @remarks
     * Update multicast settings for a network
     */
    updateNetworkSwitchSettingsMulticast(req: operations.UpdateNetworkSwitchSettingsMulticastRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchSettingsMulticastResponse>;
    /**
     * Update a quality of service rule
     *
     * @remarks
     * Update a quality of service rule
     */
    updateNetworkSwitchSettingsQosRule(req: operations.UpdateNetworkSwitchSettingsQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchSettingsQosRuleResponse>;
    /**
     * Update the order in which the rules should be processed by the switch
     *
     * @remarks
     * Update the order in which the rules should be processed by the switch
     */
    updateNetworkSwitchSettingsQosRulesOrder(req: operations.UpdateNetworkSwitchSettingsQosRulesOrderRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchSettingsQosRulesOrderResponse>;
    /**
     * Update the storm control configuration for a switch network
     *
     * @remarks
     * Update the storm control configuration for a switch network
     */
    updateNetworkSwitchSettingsStormControl(req: operations.UpdateNetworkSwitchSettingsStormControlRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchSettingsStormControlResponse>;
}
