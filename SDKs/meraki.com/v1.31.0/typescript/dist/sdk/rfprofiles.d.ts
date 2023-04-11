import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RfProfiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates new RF profile for this network
     *
     * @remarks
     * Creates new RF profile for this network
     */
    createNetworkWirelessRfProfile(req: operations.CreateNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWirelessRfProfileResponse>;
    /**
     * Delete a RF Profile
     *
     * @remarks
     * Delete a RF Profile
     */
    deleteNetworkWirelessRfProfile(req: operations.DeleteNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkWirelessRfProfileResponse>;
    /**
     * Return a RF profile
     *
     * @remarks
     * Return a RF profile
     */
    getNetworkWirelessRfProfile(req: operations.GetNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessRfProfileResponse>;
    /**
     * List the non-basic RF profiles for this network
     *
     * @remarks
     * List the non-basic RF profiles for this network
     */
    getNetworkWirelessRfProfiles(req: operations.GetNetworkWirelessRfProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessRfProfilesResponse>;
    /**
     * Updates specified RF profile for this network
     *
     * @remarks
     * Updates specified RF profile for this network
     */
    updateNetworkWirelessRfProfile(req: operations.UpdateNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessRfProfileResponse>;
}
