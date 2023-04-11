import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ServiceCredential {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List ServiceCredentials
     *
     * @remarks
     * Returns an array of ServiceCredential objects
     */
    listServiceCredentials(req: operations.ListServiceCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceCredentialsResponse>;
    /**
     * Show an existing ServiceCredential
     *
     * @remarks
     * Returns a ServiceCredential object
     */
    showServiceCredential(req: operations.ShowServiceCredentialRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceCredentialResponse>;
}
