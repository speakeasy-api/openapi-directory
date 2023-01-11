import { AxiosInstance } from "axios";
import { General } from "./general";
import { Tweets } from "./tweets";
import { Users } from "./users";
export declare const ServerList: readonly ["https://api.twitter.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    general: General;
    tweets: Tweets;
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
