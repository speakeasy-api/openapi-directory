import { BillingAccounts } from "./billingaccounts";
import { V1beta } from "./v1beta";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://cloudbilling.googleapis.com/"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Allows developers to manage billing for their Google Cloud Platform projects programmatically.
 *
 * @see {@link https://cloud.google.com/billing/}
 */
export declare class SDK {
    billingAccounts: BillingAccounts;
    v1beta: V1beta;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
