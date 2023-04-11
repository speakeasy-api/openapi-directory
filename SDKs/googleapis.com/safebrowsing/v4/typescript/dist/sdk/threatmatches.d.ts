import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ThreatMatches {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Finds the threat entries that match the Safe Browsing lists.
     */
    safebrowsingThreatMatchesFind(req: operations.SafebrowsingThreatMatchesFindRequest, config?: AxiosRequestConfig): Promise<operations.SafebrowsingThreatMatchesFindResponse>;
}
