import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SiteTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * siteTypesGetSitesForPublicFacingApi - Returns the layer metadata for the LayerId specified.
    **/
    siteTypesGetSitesForPublicFacingApi(req: operations.SiteTypesGetSitesForPublicFacingApiRequest, config?: AxiosRequestConfig): Promise<operations.SiteTypesGetSitesForPublicFacingApiResponse>;
    /**
     * siteTypesIndex - Return list of site types
    **/
    siteTypesIndex(req: operations.SiteTypesIndexRequest, config?: AxiosRequestConfig): Promise<operations.SiteTypesIndexResponse>;
}
