import { AttendanceSubscriberStateChanges } from "./attendancesubscriberstatechanges";
import { MarketingEventsExternal } from "./marketingeventsexternal";
import { Search } from "./search";
import { SettingsExternal } from "./settingsexternal";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.hubapi.com/"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * These APIs allow you to interact with HubSpot's Marketing Events Extension. It allows you to:
 *
 * @remarks
 * * Create, Read or update Marketing Event information in HubSpot
 * * Specify whether a HubSpot contact has registered, attended or cancelled a registration to a Marketing Event.
 * * Specify a URL that can be called to get the details of a Marketing Event.
 *
 */
export declare class SDK {
    /**
     * Operations to mark HubSpot contacts as registered, attended or cancelled a registration to a Marketing Event.
     */
    attendanceSubscriberStateChanges: AttendanceSubscriberStateChanges;
    marketingEventsExternal: MarketingEventsExternal;
    /**
     * Endpoints that allow you to search for Marketing Events in HubSpot.
     */
    search: Search;
    settingsExternal: SettingsExternal;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
