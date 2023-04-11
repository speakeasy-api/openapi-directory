import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Assign labels to IDs
 */
export declare class OntolLabeler {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetches a map from CURIEs/IDs to labels
     */
    getOntolLabelerResource(req: operations.GetOntolLabelerResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetOntolLabelerResourceResponse>;
}
