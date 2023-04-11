import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ThirdPartyVPNPeers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the third party VPN peers for an organization
     *
     * @remarks
     * Return the third party VPN peers for an organization
     */
    getOrganizationApplianceVPNThirdPartyVPNPeers(req: operations.GetOrganizationApplianceVPNThirdPartyVPNPeersRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceVPNThirdPartyVPNPeersResponse>;
    /**
     * Update the third party VPN peers for an organization
     *
     * @remarks
     * Update the third party VPN peers for an organization
     */
    updateOrganizationApplianceVPNThirdPartyVPNPeers(req: operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersResponse>;
}
