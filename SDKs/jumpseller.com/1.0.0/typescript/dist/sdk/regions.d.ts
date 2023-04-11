import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Regions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve all Regions from a single Country.
     */
    getCountriesCountryCodeRegionsJson(req: operations.GetCountriesCountryCodeRegionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCountriesCountryCodeRegionsJsonResponse>;
    /**
     * Retrieve a single Region information object.
     */
    getCountriesCountryCodeRegionsRegionCodeJson(req: operations.GetCountriesCountryCodeRegionsRegionCodeJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCountriesCountryCodeRegionsRegionCodeJsonResponse>;
}
