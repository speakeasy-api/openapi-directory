import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Previews } from "./previews";
import { Processes } from "./processes";
import { Projects } from "./projects";
import { Reports } from "./reports";
import { Results } from "./results";
import { Uploads } from "./uploads";
export declare const ServerList: readonly ["https://api.logoraisr.com/rest-v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    previews: Previews;
    processes: Processes;
    projects: Projects;
    reports: Reports;
    results: Results;
    uploads: Uploads;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
