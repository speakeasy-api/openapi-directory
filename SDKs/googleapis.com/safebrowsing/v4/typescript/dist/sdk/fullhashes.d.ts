import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FullHashes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Finds the full hashes that match the requested hash prefixes.
     */
    safebrowsingFullHashesFind(req: operations.SafebrowsingFullHashesFindRequest, config?: AxiosRequestConfig): Promise<operations.SafebrowsingFullHashesFindResponse>;
}
