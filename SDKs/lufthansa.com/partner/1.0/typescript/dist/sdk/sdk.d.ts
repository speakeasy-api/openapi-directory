import { Baggage } from "./baggage";
import { Offers } from "./offers";
import { Orders } from "./orders";
import { Preflight } from "./preflight";
import { Promotions } from "./promotions";
import { ReferenceData } from "./referencedata";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.lufthansa.com/v1"];
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
export declare class SDK {
    baggage: Baggage;
    offers: Offers;
    orders: Orders;
    preflight: Preflight;
    promotions: Promotions;
    referenceData: ReferenceData;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
