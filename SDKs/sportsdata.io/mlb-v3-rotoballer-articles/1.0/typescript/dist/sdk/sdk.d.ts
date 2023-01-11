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
     * rotoballerArticles - RotoBaller Articles
    **/
    rotoballerArticles(req: operations.RotoballerArticlesRequest, config?: AxiosRequestConfig): Promise<operations.RotoballerArticlesResponse>;
    /**
     * rotoballerArticlesByDate - RotoBaller Articles By Date
    **/
    rotoballerArticlesByDate(req: operations.RotoballerArticlesByDateRequest, config?: AxiosRequestConfig): Promise<operations.RotoballerArticlesByDateResponse>;
    /**
     * rotoballerArticlesByPlayer - RotoBaller Articles By Player
    **/
    rotoballerArticlesByPlayer(req: operations.RotoballerArticlesByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.RotoballerArticlesByPlayerResponse>;
}
