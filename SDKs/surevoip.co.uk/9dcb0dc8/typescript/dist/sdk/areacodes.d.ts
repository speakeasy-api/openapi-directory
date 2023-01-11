import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Areacodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAreacodes - List areacodes
    **/
    getAreacodes(config?: AxiosRequestConfig): Promise<operations.GetAreacodesResponse>;
    /**
     * getNumbersAreacodes - Search available numbers by areacode
     *
     * You can search by area name, area code or filter using both.
     *
    **/
    getNumbersAreacodes(config?: AxiosRequestConfig): Promise<operations.GetNumbersAreacodesResponse>;
}
