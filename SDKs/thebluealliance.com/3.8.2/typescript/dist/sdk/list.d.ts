import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Calls that return a list of records.
 */
export declare class List {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a list of events in the given district.
     */
    getDistrictEvents(req: operations.GetDistrictEventsRequest, security: operations.GetDistrictEventsSecurity, config?: AxiosRequestConfig): Promise<operations.GetDistrictEventsResponse>;
    /**
     * Gets a list of event keys for events in the given district.
     */
    getDistrictEventsKeys(req: operations.GetDistrictEventsKeysRequest, security: operations.GetDistrictEventsKeysSecurity, config?: AxiosRequestConfig): Promise<operations.GetDistrictEventsKeysResponse>;
    /**
     * Gets a short-form list of events in the given district.
     */
    getDistrictEventsSimple(req: operations.GetDistrictEventsSimpleRequest, security: operations.GetDistrictEventsSimpleSecurity, config?: AxiosRequestConfig): Promise<operations.GetDistrictEventsSimpleResponse>;
    /**
     * Gets a list of team district rankings for the given district.
     */
    getDistrictRankings(req: operations.GetDistrictRankingsRequest, security: operations.GetDistrictRankingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetDistrictRankingsResponse>;
    /**
     * Gets a list of `Team` objects that competed in events in the given district.
     */
    getDistrictTeams(req: operations.GetDistrictTeamsRequest, security: operations.GetDistrictTeamsSecurity, config?: AxiosRequestConfig): Promise<operations.GetDistrictTeamsResponse>;
    /**
     * Gets a list of `Team` objects that competed in events in the given district.
     */
    getDistrictTeamsKeys(req: operations.GetDistrictTeamsKeysRequest, security: operations.GetDistrictTeamsKeysSecurity, config?: AxiosRequestConfig): Promise<operations.GetDistrictTeamsKeysResponse>;
    /**
     * Gets a short-form list of `Team` objects that competed in events in the given district.
     */
    getDistrictTeamsSimple(req: operations.GetDistrictTeamsSimpleRequest, security: operations.GetDistrictTeamsSimpleSecurity, config?: AxiosRequestConfig): Promise<operations.GetDistrictTeamsSimpleResponse>;
    /**
     * Gets a list of `Team` objects that competed in the given event.
     */
    getEventTeams(req: operations.GetEventTeamsRequest, security: operations.GetEventTeamsSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventTeamsResponse>;
    /**
     * Gets a list of `Team` keys that competed in the given event.
     */
    getEventTeamsKeys(req: operations.GetEventTeamsKeysRequest, security: operations.GetEventTeamsKeysSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventTeamsKeysResponse>;
    /**
     * Gets a short-form list of `Team` objects that competed in the given event.
     */
    getEventTeamsSimple(req: operations.GetEventTeamsSimpleRequest, security: operations.GetEventTeamsSimpleSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventTeamsSimpleResponse>;
    /**
     * Gets a key-value list of the event statuses for teams competing at the given event.
     */
    getEventTeamsStatuses(req: operations.GetEventTeamsStatusesRequest, security: operations.GetEventTeamsStatusesSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventTeamsStatusesResponse>;
    /**
     * Gets a list of events in the given year.
     */
    getEventsByYear(req: operations.GetEventsByYearRequest, security: operations.GetEventsByYearSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventsByYearResponse>;
    /**
     * Gets a list of event keys in the given year.
     */
    getEventsByYearKeys(req: operations.GetEventsByYearKeysRequest, security: operations.GetEventsByYearKeysSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventsByYearKeysResponse>;
    /**
     * Gets a short-form list of events in the given year.
     */
    getEventsByYearSimple(req: operations.GetEventsByYearSimpleRequest, security: operations.GetEventsByYearSimpleSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventsByYearSimpleResponse>;
    /**
     * Gets a key-value list of the event statuses for events this team has competed at in the given year.
     */
    getTeamEventsStatusesByYear(req: operations.GetTeamEventsStatusesByYearRequest, security: operations.GetTeamEventsStatusesByYearSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamEventsStatusesByYearResponse>;
    /**
     * Gets a list of `Team` objects, paginated in groups of 500.
     */
    getTeams(req: operations.GetTeamsRequest, security: operations.GetTeamsSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamsResponse>;
    /**
     * Gets a list of `Team` objects that competed in the given year, paginated in groups of 500.
     */
    getTeamsByYear(req: operations.GetTeamsByYearRequest, security: operations.GetTeamsByYearSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamsByYearResponse>;
    /**
     * Gets a list Team Keys that competed in the given year, paginated in groups of 500.
     */
    getTeamsByYearKeys(req: operations.GetTeamsByYearKeysRequest, security: operations.GetTeamsByYearKeysSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamsByYearKeysResponse>;
    /**
     * Gets a list of short form `Team_Simple` objects that competed in the given year, paginated in groups of 500.
     */
    getTeamsByYearSimple(req: operations.GetTeamsByYearSimpleRequest, security: operations.GetTeamsByYearSimpleSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamsByYearSimpleResponse>;
    /**
     * Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)
     */
    getTeamsKeys(req: operations.GetTeamsKeysRequest, security: operations.GetTeamsKeysSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamsKeysResponse>;
    /**
     * Gets a list of short form `Team_Simple` objects, paginated in groups of 500.
     */
    getTeamsSimple(req: operations.GetTeamsSimpleRequest, security: operations.GetTeamsSimpleSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamsSimpleResponse>;
}
