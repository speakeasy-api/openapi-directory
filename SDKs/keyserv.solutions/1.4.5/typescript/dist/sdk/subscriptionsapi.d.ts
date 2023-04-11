import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SubscriptionsApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    subscriptionsApiCount(req: any, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiCountResponse>;
    subscriptionsApiDeleteSubscription(req: operations.SubscriptionsApiDeleteSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiDeleteSubscriptionResponse>;
    subscriptionsApiDeleteSubscription2(req: operations.SubscriptionsApiDeleteSubscription2Request, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiDeleteSubscription2Response>;
    subscriptionsApiDisable(req: any, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiDisableResponse>;
    subscriptionsApiDisable2(req: any, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiDisable2Response>;
    subscriptionsApiEnable(req: any, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiEnableResponse>;
    subscriptionsApiEnable2(req: any, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiEnable2Response>;
    subscriptionsApiFind(req: any, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiFindResponse>;
    subscriptionsApiList(req: operations.SubscriptionsApiListRequest, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiListResponse>;
    subscriptionsApiPutSubscription(req: any, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiPutSubscriptionResponse>;
    subscriptionsApiPutSubscription2(req: any, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiPutSubscription2Response>;
    subscriptionsApiSave(req: any, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiSaveResponse>;
}
