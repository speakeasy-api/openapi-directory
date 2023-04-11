import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TwoStepVerification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Turns off 2-Step Verification for user.
     */
    directoryTwoStepVerificationTurnOff(req: operations.DirectoryTwoStepVerificationTurnOffRequest, security: operations.DirectoryTwoStepVerificationTurnOffSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryTwoStepVerificationTurnOffResponse>;
}
