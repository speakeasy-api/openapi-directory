import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Installer {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generates a secret to be used with the ValidateInstaller.
     */
    sasportalInstallerGenerateSecret(req: operations.SasportalInstallerGenerateSecretRequest, security: operations.SasportalInstallerGenerateSecretSecurity, config?: AxiosRequestConfig): Promise<operations.SasportalInstallerGenerateSecretResponse>;
    /**
     * Validates the identity of a Certified Professional Installer (CPI).
     */
    sasportalInstallerValidate(req: operations.SasportalInstallerValidateRequest, security: operations.SasportalInstallerValidateSecurity, config?: AxiosRequestConfig): Promise<operations.SasportalInstallerValidateResponse>;
}
