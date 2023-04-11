import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Product {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve product info for a particular barcode number (UPC, EAN, or ISBN).
     */
    getProductInfo(req: operations.GetProductInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetProductInfoResponse>;
}
