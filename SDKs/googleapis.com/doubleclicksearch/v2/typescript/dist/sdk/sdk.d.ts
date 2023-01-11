import { AxiosInstance } from "axios";
import { Conversion } from "./conversion";
import { Reports } from "./reports";
import { SavedColumns } from "./savedcolumns";
export declare const ServerList: readonly ["https://doubleclicksearch.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    conversion: Conversion;
    reports: Reports;
    savedColumns: SavedColumns;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
