import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Collections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    getCollection(req: operations.GetCollectionRequest, config?: AxiosRequestConfig): Promise<operations.GetCollectionResponse>;
    getCollections(req: operations.GetCollectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetCollectionsResponse>;
}
