import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SecurityEvents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the security events (intrusion detection only) for a network
     *
     * @remarks
     * List the security events (intrusion detection only) for a network
     */
    getNetworkSecurityEvents(req: operations.GetNetworkSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSecurityEventsResponse>;
    /**
     * List the security events (intrusion detection only) for an organization
     *
     * @remarks
     * List the security events (intrusion detection only) for an organization
     */
    getOrganizationSecurityEvents(req: operations.GetOrganizationSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSecurityEventsResponse>;
}
