import { AxiosInstance } from "axios";
import { Jobs } from "./jobs";
import { Media } from "./media";
import { ReportTypes } from "./reporttypes";
export declare const ServerList: readonly ["https://youtubereporting.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    jobs: Jobs;
    media: Media;
    reportTypes: ReportTypes;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
