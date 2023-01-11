import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Plaid } from "./plaid";
export declare const ServerList: readonly ["https://production.plaid.com", "https://development.plaid.com", "https://sandbox.plaid.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    plaid: Plaid;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
