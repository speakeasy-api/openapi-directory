import { AxiosInstance } from "axios";
import { KeysApi } from "./keysapi";
import { ProductsApi } from "./productsapi";
import { SubscriptionsApi } from "./subscriptionsapi";
export declare const ServerList: readonly ["https://keyserv.solutions"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
