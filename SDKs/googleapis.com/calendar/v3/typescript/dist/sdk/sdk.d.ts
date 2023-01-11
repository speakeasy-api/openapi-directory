import { AxiosInstance } from "axios";
import { Acl } from "./acl";
import { CalendarList } from "./calendarlist";
import { Calendars } from "./calendars";
import { Channels } from "./channels";
import { Colors } from "./colors";
import { Events } from "./events";
import { Freebusy } from "./freebusy";
import { Settings } from "./settings";
export declare const ServerList: readonly ["https://www.googleapis.com/calendar/v3"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
