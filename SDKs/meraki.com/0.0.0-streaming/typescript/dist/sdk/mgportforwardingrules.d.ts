import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MGPortForwardingRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the port forwarding rules for a single MG.
     *
     * @remarks
     * Returns the port forwarding rules for a single MG.
     */
    getDeviceCellularGatewaySettingsPortForwardingRules(req: operations.GetDeviceCellularGatewaySettingsPortForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCellularGatewaySettingsPortForwardingRulesResponse>;
    /**
     * Updates the port forwarding rules for a single MG.
     *
     * @remarks
     * Updates the port forwarding rules for a single MG.
     */
    updateDeviceCellularGatewaySettingsPortForwardingRules(req: operations.UpdateDeviceCellularGatewaySettingsPortForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCellularGatewaySettingsPortForwardingRulesResponse>;
}
