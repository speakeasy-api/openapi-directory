import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Phone {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getApiPhoneCountries - Get available countries
    **/
    getApiPhoneCountries(req: operations.GetApiPhoneCountriesRequest, config?: AxiosRequestConfig): Promise<operations.GetApiPhoneCountriesResponse>;
    /**
     * getApiPhoneGenerate - Get bulk telephone numbers for a country
    **/
    getApiPhoneGenerate(req: operations.GetApiPhoneGenerateRequest, config?: AxiosRequestConfig): Promise<operations.GetApiPhoneGenerateResponse>;
    /**
     * getApiPhoneValidate - Validate a phone number
    **/
    getApiPhoneValidate(req: operations.GetApiPhoneValidateRequest, config?: AxiosRequestConfig): Promise<operations.GetApiPhoneValidateResponse>;
}
