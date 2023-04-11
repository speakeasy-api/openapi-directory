import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Areacodes of numbers that SureVoIP can supply
 */
export declare class Areacodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List areacodes
     */
    getAreacodes(config?: AxiosRequestConfig): Promise<operations.GetAreacodesResponse>;
    /**
     * Search available numbers by areacode
     *
     * @remarks
     * You can search by area name, area code or filter using both.
     *
     */
    getNumbersAreacodes(config?: AxiosRequestConfig): Promise<operations.GetNumbersAreacodesResponse>;
}
