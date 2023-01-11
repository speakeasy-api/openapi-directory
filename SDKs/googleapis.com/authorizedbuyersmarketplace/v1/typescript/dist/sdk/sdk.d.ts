import { AxiosInstance } from "axios";
import { Buyers } from "./buyers";
export declare const ServerList: readonly ["https://authorizedbuyersmarketplace.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    buyers: Buyers;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
