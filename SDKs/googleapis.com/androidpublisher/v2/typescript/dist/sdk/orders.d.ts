import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Orders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Refund a user's subscription or in-app purchase order.
     */
    androidpublisherOrdersRefund(req: operations.AndroidpublisherOrdersRefundRequest, security: operations.AndroidpublisherOrdersRefundSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherOrdersRefundResponse>;
}
