import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ClientCredentials {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addClientSecret - Obtain new client secret.
     *
     * Obtain new client secret for Paylocity-issued client id. See Setup section for details.
    **/
    addClientSecret(req: operations.AddClientSecretRequest, config?: AxiosRequestConfig): Promise<operations.AddClientSecretResponse>;
}
