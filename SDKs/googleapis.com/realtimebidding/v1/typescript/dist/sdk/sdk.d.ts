import { AxiosInstance } from "axios";
import { Bidders } from "./bidders";
import { Buyers } from "./buyers";
export declare const ServerList: readonly ["https://realtimebidding.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    bidders: Bidders;
    buyers: Buyers;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
