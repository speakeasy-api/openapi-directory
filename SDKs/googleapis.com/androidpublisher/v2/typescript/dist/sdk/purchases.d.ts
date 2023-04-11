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
     * Checks the purchase and consumption status of an inapp item.
     */
    androidpublisherPurchasesProductsGet(req: operations.AndroidpublisherPurchasesProductsGetRequest, security: operations.AndroidpublisherPurchasesProductsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherPurchasesProductsGetResponse>;
    /**
     * Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
     */
    androidpublisherPurchasesSubscriptionsCancel(req: operations.AndroidpublisherPurchasesSubscriptionsCancelRequest, security: operations.AndroidpublisherPurchasesSubscriptionsCancelSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherPurchasesSubscriptionsCancelResponse>;
    /**
     * Defers a user's subscription purchase until a specified future expiration time.
     */
    androidpublisherPurchasesSubscriptionsDefer(req: operations.AndroidpublisherPurchasesSubscriptionsDeferRequest, security: operations.AndroidpublisherPurchasesSubscriptionsDeferSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherPurchasesSubscriptionsDeferResponse>;
    /**
     * Checks whether a user's subscription purchase is valid and returns its expiry time.
     */
    androidpublisherPurchasesSubscriptionsGet(req: operations.AndroidpublisherPurchasesSubscriptionsGetRequest, security: operations.AndroidpublisherPurchasesSubscriptionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherPurchasesSubscriptionsGetResponse>;
    /**
     * Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
     */
    androidpublisherPurchasesSubscriptionsRefund(req: operations.AndroidpublisherPurchasesSubscriptionsRefundRequest, security: operations.AndroidpublisherPurchasesSubscriptionsRefundSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherPurchasesSubscriptionsRefundResponse>;
    /**
     * Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
     */
    androidpublisherPurchasesSubscriptionsRevoke(req: operations.AndroidpublisherPurchasesSubscriptionsRevokeRequest, security: operations.AndroidpublisherPurchasesSubscriptionsRevokeSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherPurchasesSubscriptionsRevokeResponse>;
    /**
     * Lists the purchases that were canceled, refunded or charged-back.
     */
    androidpublisherPurchasesVoidedpurchasesList(req: operations.AndroidpublisherPurchasesVoidedpurchasesListRequest, security: operations.AndroidpublisherPurchasesVoidedpurchasesListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherPurchasesVoidedpurchasesListResponse>;
}
