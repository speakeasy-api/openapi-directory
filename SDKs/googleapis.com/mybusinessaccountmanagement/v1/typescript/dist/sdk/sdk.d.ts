import { AxiosInstance } from "axios";
import { Accounts } from "./accounts";
import { Locations } from "./locations";
export declare const ServerList: readonly ["https://mybusinessaccountmanagement.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    accounts: Accounts;
    locations: Locations;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
