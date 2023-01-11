import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Account {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAccount - Retrieve account information
    **/
    getAccount(config?: AxiosRequestConfig): Promise<operations.GetAccountResponse>;
    /**
     * getBilling - Retrieve billing information
    **/
    getBilling(config?: AxiosRequestConfig): Promise<operations.GetBillingResponse>;
    /**
     * patchBilling - Partial update billing information
    **/
    patchBilling(req: operations.PatchBillingRequest, config?: AxiosRequestConfig): Promise<operations.PatchBillingResponse>;
    /**
     * postBillingActions - Action that should be taken to enable the selected targets
    **/
    postBillingActions(req: operations.PostBillingActionsRequest, config?: AxiosRequestConfig): Promise<operations.PostBillingActionsResponse>;
    /**
     * postBillingEstimate - Estimate costs of updating a subscription
    **/
    postBillingEstimate(req: operations.PostBillingEstimateRequest, config?: AxiosRequestConfig): Promise<operations.PostBillingEstimateResponse>;
    /**
     * postBillingSubscribe - Update a subscription
    **/
    postBillingSubscribe(req: operations.PostBillingSubscribeRequest, config?: AxiosRequestConfig): Promise<operations.PostBillingSubscribeResponse>;
    /**
     * postTargetActions - Available actions for the selected targets
    **/
    postTargetActions(req: operations.PostTargetActionsRequest, config?: AxiosRequestConfig): Promise<operations.PostTargetActionsResponse>;
    /**
     * putBilling - Update billing information
    **/
    putBilling(req: operations.PutBillingRequest, config?: AxiosRequestConfig): Promise<operations.PutBillingResponse>;
}
