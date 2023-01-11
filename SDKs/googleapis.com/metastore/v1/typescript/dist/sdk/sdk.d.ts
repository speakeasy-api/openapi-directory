import { AxiosInstance } from "axios";
import { Operations } from "./operations";
import { Projects } from "./projects";
export declare const ServerList: readonly ["https://metastore.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    operations: Operations;
    projects: Projects;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
