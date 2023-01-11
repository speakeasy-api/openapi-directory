import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Aspsps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * retrieveAllSupportedAspspSInAGivenCountry - List all ASPSPs available.
    **/
    retrieveAllSupportedAspspSInAGivenCountry(req: operations.RetrieveAllSupportedAspspSInAGivenCountryRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAllSupportedAspspSInAGivenCountryResponse>;
    /**
     * retrieveDetailsAboutSpecificAspsp - Get details about a specific ASPSP.
    **/
    retrieveDetailsAboutSpecificAspsp(req: operations.RetrieveDetailsAboutSpecificAspspRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveDetailsAboutSpecificAspspResponse>;
}
