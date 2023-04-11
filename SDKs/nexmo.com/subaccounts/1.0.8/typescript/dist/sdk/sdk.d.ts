import { SubaccountManagement } from "./subaccountmanagement";
import { Transfers } from "./transfers";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.nexmo.com/accounts"];
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
 * The Subaccounts API enables you to create subaccounts under your primary account. Subaccounts facilitate differential product configuration, reporting, and billing. The Subaccounts API is released initially with restricted availability. You can read more about the API in the [Subaccounts documentation](/account/subaccounts/overview).
 */
export declare class SDK {
    /**
     * This section shows how you can create, retrieve and modify subaccounts of a primary account.
     */
    subaccountManagement: SubaccountManagement;
    /**
     * This section shows how you execute credit, balance and number transfers, as well as viewing past transactions.
     */
    transfers: Transfers;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
