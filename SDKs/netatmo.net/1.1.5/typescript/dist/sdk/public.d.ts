import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Public stations specific methods
 */
export declare class Public {
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
     * Retrieves publicly shared weather data from Outdoor Modules within a predefined area.
     */
    getpublicdata(req: operations.GetpublicdataRequest, security: operations.GetpublicdataSecurity, config?: AxiosRequestConfig): Promise<operations.GetpublicdataResponse>;
}
