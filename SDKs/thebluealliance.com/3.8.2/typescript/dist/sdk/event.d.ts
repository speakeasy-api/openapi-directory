import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Calls that return event, or event-specific information.
 */
export declare class Event {
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
     * Gets an Event.
     */
    getEvent(req: operations.GetEventRequest, security: operations.GetEventSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventResponse>;
    /**
     * Gets a list of Elimination Alliances for the given Event.
     */
    getEventAlliances(req: operations.GetEventAlliancesRequest, security: operations.GetEventAlliancesSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventAlliancesResponse>;
    /**
     * Gets a list of awards from the given event.
     */
    getEventAwards(req: operations.GetEventAwardsRequest, security: operations.GetEventAwardsSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventAwardsResponse>;
    /**
     * Gets a list of team rankings for the Event.
     */
    getEventDistrictPoints(req: operations.GetEventDistrictPointsRequest, security: operations.GetEventDistrictPointsSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventDistrictPointsResponse>;
    /**
     * Gets a set of Event-specific insights for the given Event.
     */
    getEventInsights(req: operations.GetEventInsightsRequest, security: operations.GetEventInsightsSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventInsightsResponse>;
    /**
     * Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data.
     * *WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up.
     * *WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
     */
    getEventMatchTimeseries(req: operations.GetEventMatchTimeseriesRequest, security: operations.GetEventMatchTimeseriesSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventMatchTimeseriesResponse>;
    /**
     * Gets a list of matches for the given event.
     */
    getEventMatches(req: operations.GetEventMatchesRequest, security: operations.GetEventMatchesSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventMatchesResponse>;
    /**
     * Gets a list of match keys for the given event.
     */
    getEventMatchesKeys(req: operations.GetEventMatchesKeysRequest, security: operations.GetEventMatchesKeysSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventMatchesKeysResponse>;
    /**
     * Gets a short-form list of matches for the given event.
     */
    getEventMatchesSimple(req: operations.GetEventMatchesSimpleRequest, security: operations.GetEventMatchesSimpleSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventMatchesSimpleResponse>;
    /**
     * Gets a set of Event OPRs (including OPR, DPR, and CCWM) for the given Event.
     */
    getEventOPRs(req: operations.GetEventOPRsRequest, security: operations.GetEventOPRsSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventOPRsResponse>;
    /**
     * Gets information on TBA-generated predictions for the given Event. Contains year-specific information. *WARNING* This endpoint is currently under development and may change at any time.
     */
    getEventPredictions(req: operations.GetEventPredictionsRequest, security: operations.GetEventPredictionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventPredictionsResponse>;
    /**
     * Gets a list of team rankings for the Event.
     */
    getEventRankings(req: operations.GetEventRankingsRequest, security: operations.GetEventRankingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventRankingsResponse>;
    /**
     * Gets a short-form Event.
     */
    getEventSimple(req: operations.GetEventSimpleRequest, security: operations.GetEventSimpleSecurity, config?: AxiosRequestConfig): Promise<operations.GetEventSimpleResponse>;
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
     * Gets a list of awards the given team won at the given event.
     */
    getTeamEventAwards(req: operations.GetTeamEventAwardsRequest, security: operations.GetTeamEventAwardsSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamEventAwardsResponse>;
    /**
     * Gets a list of matches for the given team and event.
     */
    getTeamEventMatches(req: operations.GetTeamEventMatchesRequest, security: operations.GetTeamEventMatchesSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamEventMatchesResponse>;
    /**
     * Gets a list of match keys for matches for the given team and event.
     */
    getTeamEventMatchesKeys(req: operations.GetTeamEventMatchesKeysRequest, security: operations.GetTeamEventMatchesKeysSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamEventMatchesKeysResponse>;
    /**
     * Gets a short-form list of matches for the given team and event.
     */
    getTeamEventMatchesSimple(req: operations.GetTeamEventMatchesSimpleRequest, security: operations.GetTeamEventMatchesSimpleSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamEventMatchesSimpleResponse>;
    /**
     * Gets the competition rank and status of the team at the given event.
     */
    getTeamEventStatus(req: operations.GetTeamEventStatusRequest, security: operations.GetTeamEventStatusSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamEventStatusResponse>;
    /**
     * Gets a list of all events this team has competed at.
     */
    getTeamEvents(req: operations.GetTeamEventsRequest, security: operations.GetTeamEventsSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamEventsResponse>;
    /**
     * Gets a list of events this team has competed at in the given year.
     */
    getTeamEventsByYear(req: operations.GetTeamEventsByYearRequest, security: operations.GetTeamEventsByYearSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamEventsByYearResponse>;
    /**
     * Gets a list of the event keys for events this team has competed at in the given year.
     */
    getTeamEventsByYearKeys(req: operations.GetTeamEventsByYearKeysRequest, security: operations.GetTeamEventsByYearKeysSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamEventsByYearKeysResponse>;
    /**
     * Gets a short-form list of events this team has competed at in the given year.
     */
    getTeamEventsByYearSimple(req: operations.GetTeamEventsByYearSimpleRequest, security: operations.GetTeamEventsByYearSimpleSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamEventsByYearSimpleResponse>;
    /**
     * Gets a list of the event keys for all events this team has competed at.
     */
    getTeamEventsKeys(req: operations.GetTeamEventsKeysRequest, security: operations.GetTeamEventsKeysSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamEventsKeysResponse>;
    /**
     * Gets a short-form list of all events this team has competed at.
     */
    getTeamEventsSimple(req: operations.GetTeamEventsSimpleRequest, security: operations.GetTeamEventsSimpleSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamEventsSimpleResponse>;
    /**
     * Gets a key-value list of the event statuses for events this team has competed at in the given year.
     */
    getTeamEventsStatusesByYear(req: operations.GetTeamEventsStatusesByYearRequest, security: operations.GetTeamEventsStatusesByYearSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamEventsStatusesByYearResponse>;
}
