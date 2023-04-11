import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Inapppurchases {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Checks the purchase and consumption status of an inapp item.
     */
    androidpublisherInapppurchasesGet(req: operations.AndroidpublisherInapppurchasesGetRequest, security: operations.AndroidpublisherInapppurchasesGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherInapppurchasesGetResponse>;
}
