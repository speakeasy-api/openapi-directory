import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sites {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * sitesIndex - Get a list of sites
    **/
    sitesIndex(req: operations.SitesIndexRequest, config?: AxiosRequestConfig): Promise<operations.SitesIndexResponse>;
    /**
     * getVVersionSitesSiteIds - Get selected sites
    **/
    getVVersionSitesSiteIds(req: operations.GetVVersionSitesSiteIdsRequest, config?: AxiosRequestConfig): Promise<operations.GetVVersionSitesSiteIdsResponse>;
}
