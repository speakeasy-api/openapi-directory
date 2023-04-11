import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ThreatListUpdates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetches the most recent threat list updates. A client can request updates for multiple lists at once.
     */
    safebrowsingThreatListUpdatesFetch(req: operations.SafebrowsingThreatListUpdatesFetchRequest, config?: AxiosRequestConfig): Promise<operations.SafebrowsingThreatListUpdatesFetchResponse>;
}
