import { AxiosInstance } from "axios";
import { Tasklists } from "./tasklists";
import { Tasks } from "./tasks";
export declare const ServerList: readonly ["https://tasks.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    tasklists: Tasklists;
    tasks: Tasks;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
