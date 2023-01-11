import { AxiosInstance } from "axios";
import { SubaccountManagement } from "./subaccountmanagement";
import { Transfers } from "./transfers";
export declare const ServerList: readonly ["https://api.nexmo.com/accounts"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    subaccountManagement: SubaccountManagement;
    transfers: Transfers;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
