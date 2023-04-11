import { Article } from "./article";
import { Auth } from "./auth";
import { Gym } from "./gym";
import { Membership } from "./membership";
import * as shared from "./models/shared";
import { Package } from "./package";
import { Status } from "./status";
import { Test } from "./test";
import { User } from "./user";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://tl-api.azurewebsites.net", "https://triviallife.azure-api.net/v1"];
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
 * Web API for TL mobile and web app
 */
export declare class SDK {
    article: Article;
    auth: Auth;
    gym: Gym;
    membership: Membership;
    package: Package;
    status: Status;
    test: Test;
    user: User;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
