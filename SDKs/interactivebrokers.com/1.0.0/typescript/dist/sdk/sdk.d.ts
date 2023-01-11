import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { AccountAndPortfolio } from "./accountandportfolio";
import { MarketData } from "./marketdata";
import { OAuth } from "./oauth";
import { OrderMarginRequirements } from "./ordermarginrequirements";
import { Orders } from "./orders";
export declare const ServerList: readonly ["https://www.interactivebrokers.com/tradingapi/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
