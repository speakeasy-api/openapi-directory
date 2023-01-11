import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Invitation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getInvitationVendors - Get vendor list for compiled invitation needs
     *
     * Get vendor list for compiled invitation needs
    **/
    getInvitationVendors(req: operations.GetInvitationVendorsRequest, config?: AxiosRequestConfig): Promise<operations.GetInvitationVendorsResponse>;
}
