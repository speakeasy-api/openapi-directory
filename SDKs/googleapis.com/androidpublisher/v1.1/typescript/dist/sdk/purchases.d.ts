import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Purchases {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
     */
    androidpublisherPurchasesCancel(req: operations.AndroidpublisherPurchasesCancelRequest, security: operations.AndroidpublisherPurchasesCancelSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherPurchasesCancelResponse>;
    /**
     * Checks whether a user's subscription purchase is valid and returns its expiry time.
     */
    androidpublisherPurchasesGet(req: operations.AndroidpublisherPurchasesGetRequest, security: operations.AndroidpublisherPurchasesGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherPurchasesGetResponse>;
}
