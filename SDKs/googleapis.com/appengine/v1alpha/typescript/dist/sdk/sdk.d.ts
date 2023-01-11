import { AxiosInstance } from "axios";
import { Apps } from "./apps";
import { Projects } from "./projects";
export declare const ServerList: readonly ["https://appengine.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    apps: Apps;
    projects: Projects;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
