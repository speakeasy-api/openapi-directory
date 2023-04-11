import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Invitation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get vendor list for compiled invitation needs
     *
     * @remarks
     * Get vendor list for compiled invitation needs
     */
    getInvitationVendors(req: shared.FileNeedsVendor[], config?: AxiosRequestConfig): Promise<operations.GetInvitationVendorsResponse>;
}
