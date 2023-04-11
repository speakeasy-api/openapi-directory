import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CountryNameStandardization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets country name standard
     *
     * @remarks
     * Gets a pre-selected country name standard for various permutations of a given country name.
     */
    getcountrystandard(req: operations.GetcountrystandardRequest, config?: AxiosRequestConfig): Promise<operations.GetcountrystandardResponse>;
}
