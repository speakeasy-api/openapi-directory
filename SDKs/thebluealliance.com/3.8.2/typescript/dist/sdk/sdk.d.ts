import { District } from "./district";
import { Event } from "./event";
import { List } from "./list";
import { Match } from "./match";
import { Tba } from "./tba";
import { Team } from "./team";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://www.thebluealliance.com/api/v3"];
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
 * # Overview
 *
 * @remarks
 *
 *  Information and statistics about FIRST Robotics Competition teams and events.
 *
 * # Authentication
 *
 * All endpoints require an Auth Key to be passed in the header `X-TBA-Auth-Key`. If you do not have an auth key yet, you can obtain one from your [Account Page](/account).
 */
export declare class SDK {
    /**
     * Calls that expose TBA internals or status.
     */
    tba: Tba;
    /**
     * Calls that return district, or district-related information.
     */
    district: District;
    /**
     * Calls that return event, or event-specific information.
     */
    event: Event;
    /**
     * Calls that return a list of records.
     */
    list: List;
    /**
     * Calls that return match, or match-specific information.
     */
    match: Match;
    /**
     * Calls that return team or team-specific information.
     */
    team: Team;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
