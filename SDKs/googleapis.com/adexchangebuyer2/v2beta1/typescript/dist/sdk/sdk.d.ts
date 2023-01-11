import { AxiosInstance } from "axios";
import { Accounts } from "./accounts";
import { Bidders } from "./bidders";
export declare const ServerList: readonly ["https://adexchangebuyer.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    accounts: Accounts;
    bidders: Bidders;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
