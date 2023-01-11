import { AxiosInstance } from "axios";
import { Activities } from "./activities";
import { Comments } from "./comments";
import { People } from "./people";
export declare const ServerList: readonly ["https://www.googleapis.com/plus/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    activities: Activities;
    comments: Comments;
    people: People;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
