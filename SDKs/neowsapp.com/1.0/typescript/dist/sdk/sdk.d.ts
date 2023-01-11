import { AxiosInstance } from "axios";
import { Feed } from "./feed";
import { Neo } from "./neo";
import { Neosentry } from "./neosentry";
import { Stats } from "./stats";
export declare const ServerList: readonly ["http://www.neowsapp.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    feed: Feed;
    neo: Neo;
    neosentry: Neosentry;
    stats: Stats;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
