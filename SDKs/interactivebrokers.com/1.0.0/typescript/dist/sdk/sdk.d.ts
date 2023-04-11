import { AccountAndPortfolio } from "./accountandportfolio";
import { MarketData } from "./marketdata";
import * as shared from "./models/shared";
import { OAuth } from "./oauth";
import { OrderMarginRequirements } from "./ordermarginrequirements";
import { Orders } from "./orders";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://www.interactivebrokers.com/tradingapi/v1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * Interactive Brokers Web API for 3rd Party Companies
 */
export declare class SDK {
    accountAndPortfolio: AccountAndPortfolio;
    marketData: MarketData;
    oAuth: OAuth;
    orderMarginRequirements: OrderMarginRequirements;
    orders: Orders;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
