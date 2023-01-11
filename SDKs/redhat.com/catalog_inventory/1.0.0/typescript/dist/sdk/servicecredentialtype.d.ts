import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ServiceCredentialType {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * listServiceCredentialTypes - List ServiceCredentialTypes
     *
     * Returns an array of ServiceCredentialType objects
    **/
    listServiceCredentialTypes(req: operations.ListServiceCredentialTypesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceCredentialTypesResponse>;
    /**
     * showServiceCredentialType - Show an existing ServiceCredentialType
     *
     * Returns a ServiceCredentialType object
    **/
    showServiceCredentialType(req: operations.ShowServiceCredentialTypeRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceCredentialTypeResponse>;
}
