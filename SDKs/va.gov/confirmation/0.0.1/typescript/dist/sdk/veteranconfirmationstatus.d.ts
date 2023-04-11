import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Veteran Confirmation - Veteran Status
 */
export declare class VeteranConfirmationStatus {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get confirmation about an individual's Veteran status according to the VA
     */
    getVeteranStatus(req: shared.VeteranStatusRequest, security: operations.GetVeteranStatusSecurity, config?: AxiosRequestConfig): Promise<operations.GetVeteranStatusResponse>;
}
