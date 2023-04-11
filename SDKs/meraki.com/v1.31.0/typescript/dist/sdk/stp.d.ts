import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Stp {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns STP settings
     *
     * @remarks
     * Returns STP settings
     */
    getNetworkSwitchStp(req: operations.GetNetworkSwitchStpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStpResponse>;
    /**
     * Updates STP settings
     *
     * @remarks
     * Updates STP settings
     */
    updateNetworkSwitchStp(req: operations.UpdateNetworkSwitchStpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStpResponse>;
}
