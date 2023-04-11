import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class V1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves summary country information for the provided marketId and filters
     *
     * @remarks
     * Authorization is not required
     */
    getCountries(req: operations.GetCountriesRequest, config?: AxiosRequestConfig): Promise<operations.GetCountriesResponse>;
    /**
     * Retrieves country and summary state information for provided countryKey
     *
     * @remarks
     * Authorization is not required
     */
    getCountry(req: operations.GetCountryRequest, config?: AxiosRequestConfig): Promise<operations.GetCountryResponse>;
}
