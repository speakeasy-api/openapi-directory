import { AxiosInstance } from "axios";
import { Osdb } from "./osdb";
export declare const ServerList: readonly ["https://osdb.openlinksw.com/osdb"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    osdb: Osdb;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
