import { Attributes } from "./attributes";
import { Calendars } from "./calendars";
import { Commands } from "./commands";
import { Devices } from "./devices";
import { Drivers } from "./drivers";
import { Events } from "./events";
import { Geofences } from "./geofences";
import { Groups } from "./groups";
import { Maintenance } from "./maintenance";
import * as shared from "./models/shared";
import { Notifications } from "./notifications";
import { Permissions } from "./permissions";
import { Positions } from "./positions";
import { Reports } from "./reports";
import { Server } from "./server";
import { Session } from "./session";
import { Statistics } from "./statistics";
import { Users } from "./users";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://demo.traccar.org/api", "https://demo2.traccar.org/api", "https://demo3.traccar.org/api", "https://demo4.traccar.org/api", "https://server.traccar.org/api", "http://{host}:{port}/api"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * Open Source GPS Tracking Platform
 */
export declare class SDK {
    /**
     * Computed attributes management
     */
    attributes: Attributes;
    /**
     * Calendar management
     */
    calendars: Calendars;
    /**
     * Sending commands to devices and stored command management
     */
    commands: Commands;
    /**
     * Device management
     */
    devices: Devices;
    /**
     * Drivers management
     */
    drivers: Drivers;
    /**
     * Retrieving event information
     */
    events: Events;
    /**
     * Geofence management
     */
    geofences: Geofences;
    /**
     * Group management
     */
    groups: Groups;
    /**
     * Maintenance management
     */
    maintenance: Maintenance;
    /**
     * User notifications management
     */
    notifications: Notifications;
    /**
     * User permissions and other object linking
     */
    permissions: Permissions;
    /**
     * Retrieving raw location information
     */
    positions: Positions;
    /**
     * Reports generation
     */
    reports: Reports;
    /**
     * Server information
     */
    server: Server;
    /**
     * User session management
     */
    session: Session;
    /**
     * Retrieving server statistics
     */
    statistics: Statistics;
    /**
     * User management
     */
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
