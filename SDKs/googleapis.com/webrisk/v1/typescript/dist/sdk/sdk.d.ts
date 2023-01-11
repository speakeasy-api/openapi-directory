import { AxiosInstance } from "axios";
import { Hashes } from "./hashes";
import { Projects } from "./projects";
import { ThreatLists } from "./threatlists";
import { Uris } from "./uris";
export declare const ServerList: readonly ["https://webrisk.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    hashes: Hashes;
    projects: Projects;
    threatLists: ThreatLists;
    uris: Uris;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
