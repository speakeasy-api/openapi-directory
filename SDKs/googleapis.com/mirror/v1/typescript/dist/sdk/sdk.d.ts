import { AxiosInstance } from "axios";
import { Accounts } from "./accounts";
import { Contacts } from "./contacts";
import { Locations } from "./locations";
import { Settings } from "./settings";
import { Subscriptions } from "./subscriptions";
import { Timeline } from "./timeline";
export declare const ServerList: readonly ["https://www.googleapis.com/mirror/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    accounts: Accounts;
    contacts: Contacts;
    locations: Locations;
    settings: Settings;
    subscriptions: Subscriptions;
    timeline: Timeline;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
