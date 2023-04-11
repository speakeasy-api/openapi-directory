import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Preflight {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Auto Check-In
     *
     * @remarks
     * Trigger an automatic check-in given a ticket number. This service is only accessible for LH privileged partners
     */
    autoCheckIn(req: operations.AutoCheckInRequest, security: operations.AutoCheckInSecurity, config?: AxiosRequestConfig): Promise<operations.AutoCheckInResponse>;
}
