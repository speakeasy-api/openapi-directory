import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class References {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getReferencesReferencesGet - Get References
    **/
    getReferencesReferencesGet(req: operations.GetReferencesReferencesGetRequest, config?: AxiosRequestConfig): Promise<operations.GetReferencesReferencesGetResponse>;
    /**
     * getSingleReferenceReferencesEntryIdGet - Get Single Reference
    **/
    getSingleReferenceReferencesEntryIdGet(req: operations.GetSingleReferenceReferencesEntryIdGetRequest, config?: AxiosRequestConfig): Promise<operations.GetSingleReferenceReferencesEntryIdGetResponse>;
}
