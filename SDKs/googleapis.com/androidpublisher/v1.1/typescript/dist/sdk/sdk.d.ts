import { AxiosInstance } from "axios";
import { Inapppurchases } from "./inapppurchases";
import { Purchases } from "./purchases";
export declare const ServerList: readonly ["https://www.googleapis.com/androidpublisher/v1.1/applications"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    inapppurchases: Inapppurchases;
    purchases: Purchases;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
