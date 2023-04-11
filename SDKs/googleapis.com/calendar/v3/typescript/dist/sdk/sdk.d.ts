import { Acl } from "./acl";
import { CalendarList } from "./calendarlist";
import { Calendars } from "./calendars";
import { Channels } from "./channels";
import { Colors } from "./colors";
import { Events } from "./events";
import { Freebusy } from "./freebusy";
import { Settings } from "./settings";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://www.googleapis.com/calendar/v3"];
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
 * Manipulates events and other calendar data.
 *
 * @see {@link https://developers.google.com/google-apps/calendar/firstapp}
 */
export declare class SDK {
    acl: Acl;
    calendarList: CalendarList;
    calendars: Calendars;
    channels: Channels;
    colors: Colors;
    events: Events;
    freebusy: Freebusy;
    settings: Settings;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
