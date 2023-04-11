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
    prodTtSasportalInstallerGenerateSecret(req: operations.ProdTtSasportalInstallerGenerateSecretRequest, security: operations.ProdTtSasportalInstallerGenerateSecretSecurity, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalInstallerGenerateSecretResponse>;
    /**
     * Validates the identity of a Certified Professional Installer (CPI).
     */
    prodTtSasportalInstallerValidate(req: operations.ProdTtSasportalInstallerValidateRequest, security: operations.ProdTtSasportalInstallerValidateSecurity, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalInstallerValidateResponse>;
}
