import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SubscriptionsApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    subscriptionsApiCount(req: operations.SubscriptionsApiCountRequest, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiCountResponse>;
    subscriptionsApiDeleteSubscription(req: operations.SubscriptionsApiDeleteSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiDeleteSubscriptionResponse>;
    subscriptionsApiDeleteSubscription2(req: operations.SubscriptionsApiDeleteSubscription2Request, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiDeleteSubscription2Response>;
    subscriptionsApiDisable(req: operations.SubscriptionsApiDisableRequest, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiDisableResponse>;
    subscriptionsApiDisable2(req: operations.SubscriptionsApiDisable2Request, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiDisable2Response>;
    subscriptionsApiEnable(req: operations.SubscriptionsApiEnableRequest, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiEnableResponse>;
    subscriptionsApiEnable2(req: operations.SubscriptionsApiEnable2Request, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiEnable2Response>;
    subscriptionsApiFind(req: operations.SubscriptionsApiFindRequest, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiFindResponse>;
    subscriptionsApiList(req: operations.SubscriptionsApiListRequest, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiListResponse>;
    subscriptionsApiPutSubscription(req: operations.SubscriptionsApiPutSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiPutSubscriptionResponse>;
    subscriptionsApiPutSubscription2(req: operations.SubscriptionsApiPutSubscription2Request, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiPutSubscription2Response>;
    subscriptionsApiSave(req: operations.SubscriptionsApiSaveRequest, config?: AxiosRequestConfig): Promise<operations.SubscriptionsApiSaveResponse>;
}
