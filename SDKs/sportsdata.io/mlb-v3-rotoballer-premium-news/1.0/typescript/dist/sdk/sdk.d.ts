import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://azure-api.sportsdata.io/v3/mlb/news-rotoballer", "https://azure-api.sportsdata.io/v3/mlb/news-rotoballer"];
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
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Premium News
     */
    premiumNews(req: operations.PremiumNewsRequest, config?: AxiosRequestConfig): Promise<operations.PremiumNewsResponse>;
    /**
     * Premium News by Date
     */
    premiumNewsByDate(req: operations.PremiumNewsByDateRequest, config?: AxiosRequestConfig): Promise<operations.PremiumNewsByDateResponse>;
    /**
     * Premium News by Player
     */
    premiumNewsByPlayer(req: operations.PremiumNewsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PremiumNewsByPlayerResponse>;
}
