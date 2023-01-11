import { AxiosInstance } from "axios";
import { Projects } from "./projects";
import { V1beta1 } from "./v1beta1";
export declare const ServerList: readonly ["https://servicebroker.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    projects: Projects;
    v1beta1: V1beta1;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
