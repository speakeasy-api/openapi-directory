import { AxiosInstance } from "axios";
import { Accounts } from "./accounts";
import { Adclients } from "./adclients";
import { Associationsessions } from "./associationsessions";
import { Customchannels } from "./customchannels";
import { Reports } from "./reports";
import { Urlchannels } from "./urlchannels";
export declare const ServerList: readonly ["https://www.googleapis.com/adsensehost/v4.1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    accounts: Accounts;
    adclients: Adclients;
    associationsessions: Associationsessions;
    customchannels: Customchannels;
    reports: Reports;
    urlchannels: Urlchannels;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
