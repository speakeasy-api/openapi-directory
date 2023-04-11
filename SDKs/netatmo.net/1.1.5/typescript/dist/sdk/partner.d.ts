import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Partner API specific methods
 */
export declare class Partner {
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
     * The method partnerdevices returns the list of device_id to which your partner application has access to.
     */
    partnerdevices(config?: AxiosRequestConfig): Promise<operations.PartnerdevicesResponse>;
}
