import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
export declare const ServerList: readonly ["http://api.sportsdata.io", "https://api.sportsdata.io", "http://azure-api.sportsdata.io", "https://azure-api.sportsdata.io"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * premiumNews - Premium News
    **/
    premiumNews(req: operations.PremiumNewsRequest, config?: AxiosRequestConfig): Promise<operations.PremiumNewsResponse>;
    /**
     * premiumNewsByDate - Premium News by Date
    **/
    premiumNewsByDate(req: operations.PremiumNewsByDateRequest, config?: AxiosRequestConfig): Promise<operations.PremiumNewsByDateResponse>;
    /**
     * premiumNewsByPlayer - Premium News by Player
    **/
    premiumNewsByPlayer(req: operations.PremiumNewsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PremiumNewsByPlayerResponse>;
    /**
     * premiumNewsByTeam - Premium News by Team
    **/
    premiumNewsByTeam(req: operations.PremiumNewsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PremiumNewsByTeamResponse>;
}
