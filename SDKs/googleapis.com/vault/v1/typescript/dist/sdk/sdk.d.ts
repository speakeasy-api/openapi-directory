import { AxiosInstance } from "axios";
import { Matters } from "./matters";
import { Operations } from "./operations";
export declare const ServerList: readonly ["https://vault.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    matters: Matters;
    operations: Operations;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
