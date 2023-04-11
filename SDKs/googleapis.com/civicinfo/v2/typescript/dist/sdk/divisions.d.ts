import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Divisions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Searches for political divisions by their natural name or OCD ID.
     */
    civicinfoDivisionsSearch(req: operations.CivicinfoDivisionsSearchRequest, config?: AxiosRequestConfig): Promise<operations.CivicinfoDivisionsSearchResponse>;
}
