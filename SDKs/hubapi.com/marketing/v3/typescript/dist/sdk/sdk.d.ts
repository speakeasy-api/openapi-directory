import { AxiosInstance } from "axios";
import { AttendanceSubscriberStateChanges } from "./attendancesubscriberstatechanges";
import { MarketingEventsExternal } from "./marketingeventsexternal";
import { SettingsExternal } from "./settingsexternal";
export declare const ServerList: readonly ["https://api.hubapi.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    attendanceSubscriberStateChanges: AttendanceSubscriberStateChanges;
    marketingEventsExternal: MarketingEventsExternal;
    settingsExternal: SettingsExternal;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
