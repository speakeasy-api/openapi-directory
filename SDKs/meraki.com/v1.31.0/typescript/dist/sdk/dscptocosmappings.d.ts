import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DscpToCosMappings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the DSCP to CoS mappings
     *
     * @remarks
     * Return the DSCP to CoS mappings
     */
    getNetworkSwitchDscpToCosMappings(req: operations.GetNetworkSwitchDscpToCosMappingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchDscpToCosMappingsResponse>;
    /**
     * Update the DSCP to CoS mappings
     *
     * @remarks
     * Update the DSCP to CoS mappings
     */
    updateNetworkSwitchDscpToCosMappings(req: operations.UpdateNetworkSwitchDscpToCosMappingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchDscpToCosMappingsResponse>;
}
