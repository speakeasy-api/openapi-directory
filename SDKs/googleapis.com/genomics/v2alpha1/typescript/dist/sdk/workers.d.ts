import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Workers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * The worker uses this method to retrieve the assigned operation and provide periodic status updates.
     */
    genomicsWorkersCheckIn(req: operations.GenomicsWorkersCheckInRequest, security: operations.GenomicsWorkersCheckInSecurity, config?: AxiosRequestConfig): Promise<operations.GenomicsWorkersCheckInResponse>;
}
