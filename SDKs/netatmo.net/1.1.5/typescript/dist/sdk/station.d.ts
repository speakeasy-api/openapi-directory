import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Weather station specific methods
 */
export declare class Station {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * The method getmeasure returns the measurements of a device or a module.
     *
     */
    getmeasure(req: operations.GetmeasureRequest, security: operations.GetmeasureSecurity, config?: AxiosRequestConfig): Promise<operations.GetmeasureResponse>;
    /**
     * The method getstationsdata Returns data from a user's Weather Stations (measures and device specific data).
     */
    getstationsdata(req: operations.GetstationsdataRequest, security: operations.GetstationsdataSecurity, config?: AxiosRequestConfig): Promise<operations.GetstationsdataResponse>;
}
