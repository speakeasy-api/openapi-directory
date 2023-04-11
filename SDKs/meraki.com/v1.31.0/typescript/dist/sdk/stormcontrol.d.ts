import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class StormControl {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the storm control configuration for a switch network
     *
     * @remarks
     * Return the storm control configuration for a switch network
     */
    getNetworkSwitchStormControl(req: operations.GetNetworkSwitchStormControlRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStormControlResponse>;
    /**
     * Update the storm control configuration for a switch network
     *
     * @remarks
     * Update the storm control configuration for a switch network
     */
    updateNetworkSwitchStormControl(req: operations.UpdateNetworkSwitchStormControlRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStormControlResponse>;
}
