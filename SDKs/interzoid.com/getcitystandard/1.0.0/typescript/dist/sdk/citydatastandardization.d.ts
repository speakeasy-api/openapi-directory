import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CityDataStandardization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a city name standard for US and international cities
     *
     * @remarks
     * Gets a pre-selected city name standard for US and international cities for various permutations of a given city name.
     */
    getcitystandard(req: operations.GetcitystandardRequest, config?: AxiosRequestConfig): Promise<operations.GetcitystandardResponse>;
}
