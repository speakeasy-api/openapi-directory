import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VerificationCodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generates new backup verification codes for the user.
     */
    directoryVerificationCodesGenerate(req: operations.DirectoryVerificationCodesGenerateRequest, security: operations.DirectoryVerificationCodesGenerateSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryVerificationCodesGenerateResponse>;
    /**
     * Invalidates the current backup verification codes for the user.
     */
    directoryVerificationCodesInvalidate(req: operations.DirectoryVerificationCodesInvalidateRequest, security: operations.DirectoryVerificationCodesInvalidateSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryVerificationCodesInvalidateResponse>;
    /**
     * Returns the current set of valid backup verification codes for the specified user.
     */
    directoryVerificationCodesList(req: operations.DirectoryVerificationCodesListRequest, security: operations.DirectoryVerificationCodesListSecurity, config?: AxiosRequestConfig): Promise<operations.DirectoryVerificationCodesListResponse>;
}
