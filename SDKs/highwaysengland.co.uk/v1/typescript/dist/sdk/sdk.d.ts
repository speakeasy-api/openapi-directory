import { AxiosInstance } from "axios";
import { Areas } from "./areas";
import { Quality } from "./quality";
import { Reports } from "./reports";
import { SiteTypes } from "./sitetypes";
import { Sites } from "./sites";
export declare const ServerList: readonly ["https://webtris.highwaysengland.co.uk/api"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    areas: Areas;
    quality: Quality;
    reports: Reports;
    siteTypes: SiteTypes;
    sites: Sites;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
