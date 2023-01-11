import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ServiceCredential {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * listServiceCredentials - List ServiceCredentials
     *
     * Returns an array of ServiceCredential objects
    **/
    listServiceCredentials(req: operations.ListServiceCredentialsRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceCredentialsResponse>;
    /**
     * showServiceCredential - Show an existing ServiceCredential
     *
     * Returns a ServiceCredential object
    **/
    showServiceCredential(req: operations.ShowServiceCredentialRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceCredentialResponse>;
}
