import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * This section shows how you can query the current balance of your account, and if you have auto-reload enabled how to trigger a top-up to your account without waiting for the next balance check.
 */
export declare class Balance {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Account Balance
     *
     * @remarks
     * Retrieve the current balance of your Vonage API account
     */
    getAccountBalance(req: operations.GetAccountBalanceRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.GetAccountBalanceResponse>;
    /**
     * Top Up Account Balance
     *
     * @remarks
     * You can top up your account using this API when you have enabled auto-reload in the dashboard. The amount added by the top-up operation will be the same amount as was added in the payment when auto-reload was enabled.
     * Your account balance is checked every 5-10 minutes and if it falls below the threshold and auto-reload is enabled, then it will be topped up automatically. Use this endpoint  if you need to top up at times when your credit may be exhausted more quickly than the auto-reload may occur.
     *
     * @see {@link https://help.nexmo.com/hc/en-us/articles/205603248-How-do-I-set-up-automatic-payments-using-PayPal-or-credit-card-} - Read more about automatic payments on the Knowledgebase
     */
    topUpAccountBalance(req: operations.TopUpAccountBalanceRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.TopUpAccountBalanceResponse>;
}
