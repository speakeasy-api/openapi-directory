import { AxiosInstance } from "axios";
import { JobFeed } from "./jobfeed";
export declare const ServerList: readonly ["https://workbcjobs.api.gov.bc.ca/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    jobFeed: JobFeed;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
