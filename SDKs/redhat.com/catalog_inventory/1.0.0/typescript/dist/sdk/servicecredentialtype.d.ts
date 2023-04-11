import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ServiceCredentialType {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List ServiceCredentialTypes
     *
     * @remarks
     * Returns an array of ServiceCredentialType objects
     */
    listServiceCredentialTypes(req: operations.ListServiceCredentialTypesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceCredentialTypesResponse>;
    /**
     * Show an existing ServiceCredentialType
     *
     * @remarks
     * Returns a ServiceCredentialType object
     */
    showServiceCredentialType(req: operations.ShowServiceCredentialTypeRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceCredentialTypeResponse>;
}
