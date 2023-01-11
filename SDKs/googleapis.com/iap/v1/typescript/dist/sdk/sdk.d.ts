import { AxiosInstance } from "axios";
import { Projects } from "./projects";
import { V1 } from "./v1";
export declare const ServerList: readonly ["https://iap.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    projects: Projects;
    v1: V1;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
