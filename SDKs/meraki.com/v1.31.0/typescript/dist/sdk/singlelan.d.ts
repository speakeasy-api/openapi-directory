import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SingleLan {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return single LAN configuration
     *
     * @remarks
     * Return single LAN configuration
     */
    getNetworkApplianceSingleLan(req: operations.GetNetworkApplianceSingleLanRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSingleLanResponse>;
    /**
     * Update single LAN configuration
     *
     * @remarks
     * Update single LAN configuration
     */
    updateNetworkApplianceSingleLan(req: operations.UpdateNetworkApplianceSingleLanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSingleLanResponse>;
}
