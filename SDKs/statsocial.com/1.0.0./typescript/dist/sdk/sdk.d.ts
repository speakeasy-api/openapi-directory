import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Application } from "./application";
import { CustomReports } from "./customreports";
import { FollowerReports } from "./followerreports";
import { Reports } from "./reports";
import { TweetReports } from "./tweetreports";
export declare const ServerList: readonly ["http://api.statsocial.com/api"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
