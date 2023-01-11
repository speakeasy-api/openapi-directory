import { AxiosInstance } from "axios";
import { Searchanalytics } from "./searchanalytics";
import { Sitemaps } from "./sitemaps";
import { Sites } from "./sites";
import { UrlInspection } from "./urlinspection";
import { UrlTestingTools } from "./urltestingtools";
export declare const ServerList: readonly ["https://searchconsole.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    searchanalytics: Searchanalytics;
    sitemaps: Sitemaps;
    sites: Sites;
    urlInspection: UrlInspection;
    urlTestingTools: UrlTestingTools;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
