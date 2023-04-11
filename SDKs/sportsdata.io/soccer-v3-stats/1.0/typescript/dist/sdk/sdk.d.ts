import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://azure-api.sportsdata.io/v3/soccer/stats", "https://azure-api.sportsdata.io/v3/soccer/stats"];
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
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Areas (Countries)
     */
    areasCountries(req: operations.AreasCountriesRequest, config?: AxiosRequestConfig): Promise<operations.AreasCountriesResponse>;
    /**
     * Box Score
     */
    boxScore(req: operations.BoxScoreRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoreResponse>;
    /**
     * Box Scores by Date
     */
    boxScoresByDate(req: operations.BoxScoresByDateRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoresByDateResponse>;
    /**
     * Box Scores by Date by Competition
     */
    boxScoresByDateByCompetition(req: operations.BoxScoresByDateByCompetitionRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoresByDateByCompetitionResponse>;
    /**
     * Box Scores by Date Delta
     */
    boxScoresByDateDelta(req: operations.BoxScoresByDateDeltaRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoresByDateDeltaResponse>;
    /**
     * Box Scores Delta by Date by Competition
     */
    boxScoresDeltaByDateByCompetition(req: operations.BoxScoresDeltaByDateByCompetitionRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoresDeltaByDateByCompetitionResponse>;
    /**
     * Competition Fixtures (League Details)
     */
    competitionFixturesLeagueDetails(req: operations.CompetitionFixturesLeagueDetailsRequest, config?: AxiosRequestConfig): Promise<operations.CompetitionFixturesLeagueDetailsResponse>;
    /**
     * Competition Hierarchy (League Hierarchy)
     */
    competitionHierarchyLeagueHierarchy(req: operations.CompetitionHierarchyLeagueHierarchyRequest, config?: AxiosRequestConfig): Promise<operations.CompetitionHierarchyLeagueHierarchyResponse>;
    /**
     * Competitions (Leagues)
     */
    competitionsLeagues(req: operations.CompetitionsLeaguesRequest, config?: AxiosRequestConfig): Promise<operations.CompetitionsLeaguesResponse>;
    /**
     * Dfs Slates By Date
     */
    dfsSlatesByDate(req: operations.DfsSlatesByDateRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesByDateResponse>;
    /**
     * Games by Date
     */
    gamesByDate(req: operations.GamesByDateRequest, config?: AxiosRequestConfig): Promise<operations.GamesByDateResponse>;
    /**
     * Memberships (Active)
     */
    membershipsActive(req: operations.MembershipsActiveRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsActiveResponse>;
    /**
     * Memberships by Competition (Active)
     */
    membershipsByCompetitionActive(req: operations.MembershipsByCompetitionActiveRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsByCompetitionActiveResponse>;
    /**
     * Memberships by Competition (Historical)
     */
    membershipsByCompetitionHistorical(req: operations.MembershipsByCompetitionHistoricalRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsByCompetitionHistoricalResponse>;
    /**
     * Memberships by Team (Active)
     */
    membershipsByTeamActive(req: operations.MembershipsByTeamActiveRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsByTeamActiveResponse>;
    /**
     * Memberships by Team (Historical)
     */
    membershipsByTeamHistorical(req: operations.MembershipsByTeamHistoricalRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsByTeamHistoricalResponse>;
    /**
     * Memberships (Historical)
     */
    membershipsHistorical(req: operations.MembershipsHistoricalRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsHistoricalResponse>;
    /**
     * Memberships (Recently Changed)
     */
    membershipsRecentlyChanged(req: operations.MembershipsRecentlyChangedRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsRecentlyChangedResponse>;
    /**
     * Player
     */
    player(req: operations.PlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerResponse>;
    /**
     * Player Game Stats by Date
     */
    playerGameStatsByDate(req: operations.PlayerGameStatsByDateRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameStatsByDateResponse>;
    /**
     * Player Game Stats by Player
     */
    playerGameStatsByPlayer(req: operations.PlayerGameStatsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameStatsByPlayerResponse>;
    /**
     * Player Season Stats
     */
    playerSeasonStats(req: operations.PlayerSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonStatsResponse>;
    /**
     * Player Season Stats by Player
     */
    playerSeasonStatsByPlayer(req: operations.PlayerSeasonStatsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonStatsByPlayerResponse>;
    /**
     * Player Season Stats by Team
     */
    playerSeasonStatsByTeam(req: operations.PlayerSeasonStatsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonStatsByTeamResponse>;
    /**
     * Players
     */
    players(req: operations.PlayersRequest, config?: AxiosRequestConfig): Promise<operations.PlayersResponse>;
    /**
     * Players by Team
     */
    playersByTeam(req: operations.PlayersByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayersByTeamResponse>;
    /**
     * Schedule
     */
    schedule(req: operations.ScheduleRequest, config?: AxiosRequestConfig): Promise<operations.ScheduleResponse>;
    /**
     * Season Teams
     */
    seasonTeams(req: operations.SeasonTeamsRequest, config?: AxiosRequestConfig): Promise<operations.SeasonTeamsResponse>;
    /**
     * Standings
     */
    standings(req: operations.StandingsRequest, config?: AxiosRequestConfig): Promise<operations.StandingsResponse>;
    /**
     * Team Game Stats by Date
     */
    teamGameStatsByDate(req: operations.TeamGameStatsByDateRequest, config?: AxiosRequestConfig): Promise<operations.TeamGameStatsByDateResponse>;
    /**
     * Team Season Stats
     */
    teamSeasonStats(req: operations.TeamSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.TeamSeasonStatsResponse>;
    /**
     * Teams
     */
    teams(req: operations.TeamsRequest, config?: AxiosRequestConfig): Promise<operations.TeamsResponse>;
    /**
     * Upcoming Dfs Slates By Competition
     */
    upcomingDfsSlatesByCompetition(req: operations.UpcomingDfsSlatesByCompetitionRequest, config?: AxiosRequestConfig): Promise<operations.UpcomingDfsSlatesByCompetitionResponse>;
    /**
     * Upcoming Schedule By Player
     */
    upcomingScheduleByPlayer(req: operations.UpcomingScheduleByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.UpcomingScheduleByPlayerResponse>;
    /**
     * Venues
     */
    venues(req: operations.VenuesRequest, config?: AxiosRequestConfig): Promise<operations.VenuesResponse>;
}
