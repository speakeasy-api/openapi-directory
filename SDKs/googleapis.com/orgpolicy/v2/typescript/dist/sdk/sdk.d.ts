import { AxiosInstance } from "axios";
import { Organizations } from "./organizations";
import { Projects } from "./projects";
export declare const ServerList: readonly ["https://orgpolicy.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    organizations: Organizations;
    projects: Projects;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
