import { AxiosInstance } from "axios";
import { Accounts } from "./accounts";
export declare const ServerList: readonly ["https://playcustomapp.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    accounts: Accounts;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
