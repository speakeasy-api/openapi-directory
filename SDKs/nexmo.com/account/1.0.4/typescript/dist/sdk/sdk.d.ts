import { AxiosInstance } from "axios";
import { Balance } from "./balance";
import { Configuration } from "./configuration";
import { SecretManagement } from "./secretmanagement";
export declare const ServerList: readonly ["https://api.nexmo.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    balance: Balance;
    configuration: Configuration;
    secretManagement: SecretManagement;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
