import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BypassActivationLockAttempts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Bypass activation lock attempt
     *
     * @remarks
     * Bypass activation lock attempt
     */
    createNetworkSmBypassActivationLockAttempt(req: operations.CreateNetworkSmBypassActivationLockAttemptRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSmBypassActivationLockAttemptResponse>;
    /**
     * Bypass activation lock attempt status
     *
     * @remarks
     * Bypass activation lock attempt status
     */
    getNetworkSmBypassActivationLockAttempt(req: operations.GetNetworkSmBypassActivationLockAttemptRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmBypassActivationLockAttemptResponse>;
}
