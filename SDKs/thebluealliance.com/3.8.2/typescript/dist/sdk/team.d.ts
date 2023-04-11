import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Calls that return team or team-specific information.
 */
export declare class Team {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
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
     * Gets a `Team` object for the team referenced by the given key.
     */
    getTeam(req: operations.GetTeamRequest, security: operations.GetTeamSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamResponse>;
    /**
     * Gets a list of awards the given team has won.
     */
    getTeamAwards(req: operations.GetTeamAwardsRequest, security: operations.GetTeamAwardsSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamAwardsResponse>;
    /**
     * Gets a list of awards the given team has won in a given year.
     */
    getTeamAwardsByYear(req: operations.GetTeamAwardsByYearRequest, security: operations.GetTeamAwardsByYearSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamAwardsByYearResponse>;
    /**
     * Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.
     */
    getTeamDistricts(req: operations.GetTeamDistrictsRequest, security: operations.GetTeamDistrictsSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamDistrictsResponse>;
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
    /**
     * Gets a list of matches for the given team and year.
     */
    getTeamMatchesByYear(req: operations.GetTeamMatchesByYearRequest, security: operations.GetTeamMatchesByYearSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamMatchesByYearResponse>;
    /**
     * Gets a list of match keys for matches for the given team and year.
     */
    getTeamMatchesByYearKeys(req: operations.GetTeamMatchesByYearKeysRequest, security: operations.GetTeamMatchesByYearKeysSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamMatchesByYearKeysResponse>;
    /**
     * Gets a short-form list of matches for the given team and year.
     */
    getTeamMatchesByYearSimple(req: operations.GetTeamMatchesByYearSimpleRequest, security: operations.GetTeamMatchesByYearSimpleSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamMatchesByYearSimpleResponse>;
    /**
     * Gets a list of Media (videos / pictures) for the given team and tag.
     */
    getTeamMediaByTag(req: operations.GetTeamMediaByTagRequest, security: operations.GetTeamMediaByTagSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamMediaByTagResponse>;
    /**
     * Gets a list of Media (videos / pictures) for the given team, tag and year.
     */
    getTeamMediaByTagYear(req: operations.GetTeamMediaByTagYearRequest, security: operations.GetTeamMediaByTagYearSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamMediaByTagYearResponse>;
    /**
     * Gets a list of Media (videos / pictures) for the given team and year.
     */
    getTeamMediaByYear(req: operations.GetTeamMediaByYearRequest, security: operations.GetTeamMediaByYearSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamMediaByYearResponse>;
    /**
     * Gets a list of year and robot name pairs for each year that a robot name was provided. Will return an empty array if the team has never named a robot.
     */
    getTeamRobots(req: operations.GetTeamRobotsRequest, security: operations.GetTeamRobotsSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamRobotsResponse>;
    /**
     * Gets a `Team_Simple` object for the team referenced by the given key.
     */
    getTeamSimple(req: operations.GetTeamSimpleRequest, security: operations.GetTeamSimpleSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamSimpleResponse>;
    /**
     * Gets a list of Media (social media) for the given team.
     */
    getTeamSocialMedia(req: operations.GetTeamSocialMediaRequest, security: operations.GetTeamSocialMediaSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamSocialMediaResponse>;
    /**
     * Gets a list of years in which the team participated in at least one competition.
     */
    getTeamYearsParticipated(req: operations.GetTeamYearsParticipatedRequest, security: operations.GetTeamYearsParticipatedSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamYearsParticipatedResponse>;
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
