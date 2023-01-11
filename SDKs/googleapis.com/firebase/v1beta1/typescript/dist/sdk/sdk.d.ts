import { AxiosInstance } from "axios";
import { AvailableProjects } from "./availableprojects";
import { Projects } from "./projects";
export declare const ServerList: readonly ["https://firebase.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    availableProjects: AvailableProjects;
    projects: Projects;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
