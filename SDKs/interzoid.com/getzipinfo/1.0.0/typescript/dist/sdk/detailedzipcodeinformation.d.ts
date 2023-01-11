import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DetailedZipCodeInformation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getzipcodeinfo - Gets detailed zip code information
     *
     * For a given zip code, detailed information is returned, including city, state, latitude, longitude, area size, and various population demographics, including income, age, and presence of farming data.
    **/
    getzipcodeinfo(req: operations.GetzipcodeinfoRequest, config?: AxiosRequestConfig): Promise<operations.GetzipcodeinfoResponse>;
}
