import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Charges {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCharges - List charges
    **/
    getCharges(config?: AxiosRequestConfig): Promise<operations.GetChargesResponse>;
    /**
     * postCharges - Create charges for invoices
    **/
    postCharges(config?: AxiosRequestConfig): Promise<operations.PostChargesResponse>;
}
