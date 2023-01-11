import { AxiosInstance } from "axios";
import { General } from "./general";
import { Rules } from "./rules";
import { Tweets } from "./tweets";
export declare const ServerList: readonly ["https://api.twitter.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    general: General;
    rules: Rules;
    tweets: Tweets;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
