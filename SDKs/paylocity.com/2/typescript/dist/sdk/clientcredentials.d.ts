import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ClientCredentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Obtain new client secret.
     *
     * @remarks
     * Obtain new client secret for Paylocity-issued client id. See Setup section for details.
     */
    addClientSecret(req: shared.AddClientSecret, security: operations.AddClientSecretSecurity, config?: AxiosRequestConfig): Promise<operations.AddClientSecretResponse>;
}
