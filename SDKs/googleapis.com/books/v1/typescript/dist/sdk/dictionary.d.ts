import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Dictionary {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a list of offline dictionary metadata available
     */
    booksDictionaryListOfflineMetadata(req: operations.BooksDictionaryListOfflineMetadataRequest, security: operations.BooksDictionaryListOfflineMetadataSecurity, config?: AxiosRequestConfig): Promise<operations.BooksDictionaryListOfflineMetadataResponse>;
}
