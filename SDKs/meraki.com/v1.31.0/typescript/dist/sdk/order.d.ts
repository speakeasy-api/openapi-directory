import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Order {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the quality of service rule IDs by order in which they will be processed by the switch
     *
     * @remarks
     * Return the quality of service rule IDs by order in which they will be processed by the switch
     */
    getNetworkSwitchQosRulesOrder(req: operations.GetNetworkSwitchQosRulesOrderRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchQosRulesOrderResponse>;
    /**
     * Update the order in which the rules should be processed by the switch
     *
     * @remarks
     * Update the order in which the rules should be processed by the switch
     */
    updateNetworkSwitchQosRulesOrder(req: operations.UpdateNetworkSwitchQosRulesOrderRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchQosRulesOrderResponse>;
}
