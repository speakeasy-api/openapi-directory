import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Accounts } from "./accounts";
import { Agreements } from "./agreements";
import { Aspsps } from "./aspsps";
import { Requisitions } from "./requisitions";
export declare const ServerList: readonly ["https://ob.nordigen.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    accounts: Accounts;
    agreements: Agreements;
    aspsps: Aspsps;
    requisitions: Requisitions;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
