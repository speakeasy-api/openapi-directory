import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CityDataStandardization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getcitystandard - Gets a city name standard for US and international cities
     *
     * Gets a pre-selected city name standard for US and international cities for various permutations of a given city name.
    **/
    getcitystandard(req: operations.GetcitystandardRequest, config?: AxiosRequestConfig): Promise<operations.GetcitystandardResponse>;
}
