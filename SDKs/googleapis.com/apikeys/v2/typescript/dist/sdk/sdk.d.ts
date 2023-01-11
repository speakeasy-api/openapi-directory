import { AxiosInstance } from "axios";
import { Keys } from "./keys";
import { Projects } from "./projects";
export declare const ServerList: readonly ["https://apikeys.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    keys: Keys;
    projects: Projects;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
