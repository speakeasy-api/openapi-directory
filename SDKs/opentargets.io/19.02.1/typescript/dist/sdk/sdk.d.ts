import { AxiosInstance } from "axios";
import { Filter } from "./filter";
import { Private } from "./private";
import { Public } from "./public";
import { Retrieve } from "./retrieve";
import { Search } from "./search";
import { Utils } from "./utils";
export declare const ServerList: readonly ["https://opentargets.io//platform-api.opentargets.io/v3"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    filter: Filter;
    private: Private;
    public: Public;
    retrieve: Retrieve;
    search: Search;
    utils: Utils;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
