import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Countries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one country by ID.
     */
    dfareportingCountriesGet(req: operations.DfareportingCountriesGetRequest, security: operations.DfareportingCountriesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCountriesGetResponse>;
    /**
     * Retrieves a list of countries.
     */
    dfareportingCountriesList(req: operations.DfareportingCountriesListRequest, security: operations.DfareportingCountriesListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCountriesListResponse>;
}
