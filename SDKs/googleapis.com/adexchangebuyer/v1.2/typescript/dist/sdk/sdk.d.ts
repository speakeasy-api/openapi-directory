import { AxiosInstance } from "axios";
import { Accounts } from "./accounts";
import { Creatives } from "./creatives";
export declare const ServerList: readonly ["https://www.googleapis.com/adexchangebuyer/v1.2"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    accounts: Accounts;
    creatives: Creatives;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
