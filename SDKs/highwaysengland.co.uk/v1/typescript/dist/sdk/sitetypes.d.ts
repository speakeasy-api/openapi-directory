import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SiteTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the layer metadata for the LayerId specified.
     */
    siteTypesGetSitesForPublicFacingAPI(req: operations.SiteTypesGetSitesForPublicFacingAPIRequest, config?: AxiosRequestConfig): Promise<operations.SiteTypesGetSitesForPublicFacingAPIResponse>;
    /**
     * Return list of site types
     */
    siteTypesIndex(req: operations.SiteTypesIndexRequest, config?: AxiosRequestConfig): Promise<operations.SiteTypesIndexResponse>;
}
