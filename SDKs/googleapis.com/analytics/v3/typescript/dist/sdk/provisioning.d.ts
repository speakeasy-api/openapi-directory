import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Provisioning {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates an account ticket.
     */
    analyticsProvisioningCreateAccountTicket(req: operations.AnalyticsProvisioningCreateAccountTicketRequest, security: operations.AnalyticsProvisioningCreateAccountTicketSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsProvisioningCreateAccountTicketResponse>;
    /**
     * Provision account.
     */
    analyticsProvisioningCreateAccountTree(req: operations.AnalyticsProvisioningCreateAccountTreeRequest, security: operations.AnalyticsProvisioningCreateAccountTreeSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsProvisioningCreateAccountTreeResponse>;
}
