import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Claim {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Claim a vMX into a network
     *
     * @remarks
     * Claim a vMX into a network
     */
    vmxNetworkDevicesClaim(req: operations.VmxNetworkDevicesClaimRequest, config?: AxiosRequestConfig): Promise<operations.VmxNetworkDevicesClaimResponse>;
}
