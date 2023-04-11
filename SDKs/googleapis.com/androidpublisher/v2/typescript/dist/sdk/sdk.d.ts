import { Edits } from "./edits";
import { Inappproducts } from "./inappproducts";
import { Orders } from "./orders";
import { Purchases } from "./purchases";
import { Reviews } from "./reviews";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://www.googleapis.com/androidpublisher/v2/applications"];
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
 * Accesses Android application developers' Google Play accounts.
 *
 * @see {@link https://developers.google.com/android-publisher}
 */
export declare class SDK {
    edits: Edits;
    inappproducts: Inappproducts;
    orders: Orders;
    purchases: Purchases;
    reviews: Reviews;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
