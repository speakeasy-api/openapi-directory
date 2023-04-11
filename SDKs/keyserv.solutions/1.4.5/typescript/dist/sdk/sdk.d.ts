import { KeysApi } from "./keysapi";
import { ProductsApi } from "./productsapi";
import { SubscriptionsApi } from "./subscriptionsapi";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://keyserv.solutions"];
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
 * KeyServ API
 */
export declare class SDK {
    keysApi: KeysApi;
    productsApi: ProductsApi;
    subscriptionsApi: SubscriptionsApi;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
