import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Metadata {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getMetadataForDatasets - Get metadata for all datasets from SciGraph
    **/
    getMetadataForDatasets(config?: AxiosRequestConfig): Promise<operations.GetMetadataForDatasetsResponse>;
}
