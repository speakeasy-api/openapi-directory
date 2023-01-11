import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PayorsPrivate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createPayorLinks - Create a Payor Link
     *
     * This endpoint allows you to create a payor link.
    **/
    createPayorLinks(req: operations.CreatePayorLinksRequest, config?: AxiosRequestConfig): Promise<operations.CreatePayorLinksResponse>;
}
