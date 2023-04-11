import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Account management.
 */
export declare class Account {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve account information
     */
    getAccount(config?: AxiosRequestConfig): Promise<operations.GetAccountResponse>;
    /**
     * Retrieve billing information
     */
    getBilling(config?: AxiosRequestConfig): Promise<operations.GetBillingResponse>;
    /**
     * Partial update billing information
     */
    patchBilling(req: shared.Billing, config?: AxiosRequestConfig): Promise<operations.PatchBillingResponse>;
    /**
     * Action that should be taken to enable the selected targets
     */
    postBillingActions(req: string[], config?: AxiosRequestConfig): Promise<operations.PostBillingActionsResponse>;
    /**
     * Estimate costs of updating a subscription
     */
    postBillingEstimate(req: shared.SubscriptionInput, config?: AxiosRequestConfig): Promise<operations.PostBillingEstimateResponse>;
    /**
     * Update a subscription
     */
    postBillingSubscribe(req: shared.SubscriptionInput, config?: AxiosRequestConfig): Promise<operations.PostBillingSubscribeResponse>;
    /**
     * Available actions for the selected targets
     */
    postTargetActions(req: string[], config?: AxiosRequestConfig): Promise<operations.PostTargetActionsResponse>;
    /**
     * Update billing information
     */
    putBilling(req: shared.Billing, config?: AxiosRequestConfig): Promise<operations.PutBillingResponse>;
}
