import { AxiosInstance } from "axios";
import { GroupItems } from "./groupitems";
import { Groups } from "./groups";
import { Reports } from "./reports";
export declare const ServerList: readonly ["https://youtubeanalytics.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    groupItems: GroupItems;
    groups: Groups;
    reports: Reports;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
