import { AxiosInstance } from "axios";
import { Groups } from "./groups";
export declare const ServerList: readonly ["https://www.googleapis.com/groups/v1/groups"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    groups: Groups;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
