import { Application } from "./application";
import { CustomReports } from "./customreports";
import { FollowerReports } from "./followerreports";
import * as shared from "./models/shared";
import { Reports } from "./reports";
import { TweetReports } from "./tweetreports";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://api.statsocial.com/api"];
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
 * API Reference: <br><br> The StatSocial API is organized around REST. Our API is designed to have predictable, resource-oriented URLs and to use HTTP response codes to indicate API errors. We use built-in HTTP features, like HTTP authentication and HTTP verbs, which can be understood by off-the-shelf HTTP clients, and we support cross-origin resource sharing to allow you to interact securely with our API from a client-side web application (remember that you should never expose your secret API key in any public website's client-side code). JSON will be returned in all responses from the API, including errors (though if you're using API bindings, we will convert the response to the appropriate language-specific object).<br><br>Contact help@statsocial.com to obtain a test API key
 *
 * @see {@link http://docs.statsocial.com/home/}
 */
export declare class SDK {
    application: Application;
    customReports: CustomReports;
    followerReports: FollowerReports;
    reports: Reports;
    tweetReports: TweetReports;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
