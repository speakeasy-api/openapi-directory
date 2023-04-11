import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://azure-api.sportsdata.io/v3/lol/stats", "https://azure-api.sportsdata.io/v3/lol/stats"];
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
 * LoL v3 Stats
 */
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
     *
     * @remarks
     * Areas (Countries)
     */
    areasCountries(req: operations.AreasCountriesRequest, config?: AxiosRequestConfig): Promise<operations.AreasCountriesResponse>;
    /**
     * Box Score
     *
     * @remarks
     * Games by Date
     */
    boxScore(req: operations.BoxScoreRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoreResponse>;
    /**
     * Box Scores by Date
     *
     * @remarks
     * Games by Date
     */
    boxScoresByDate(req: operations.BoxScoresByDateRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoresByDateResponse>;
    /**
     * Champions
     *
     * @remarks
     * Areas (Countries)
     */
    champions(req: operations.ChampionsRequest, config?: AxiosRequestConfig): Promise<operations.ChampionsResponse>;
    /**
     * Competition Fixtures (League Details)
     *
     * @remarks
     * Competition Fixtures (League Details)
     */
    competitionFixturesLeagueDetails(req: operations.CompetitionFixturesLeagueDetailsRequest, config?: AxiosRequestConfig): Promise<operations.CompetitionFixturesLeagueDetailsResponse>;
    /**
     * Competitions (Leagues)
     *
     * @remarks
     * Competitions (Leagues)
     */
    competitionsLeagues(req: operations.CompetitionsLeaguesRequest, config?: AxiosRequestConfig): Promise<operations.CompetitionsLeaguesResponse>;
    /**
     * Games by Date
     *
     * @remarks
     * Games by Date
     */
    gamesByDate(req: operations.GamesByDateRequest, config?: AxiosRequestConfig): Promise<operations.GamesByDateResponse>;
    /**
     * Items
     *
     * @remarks
     * Competitions (Leagues)
     */
    items(req: operations.ItemsRequest, config?: AxiosRequestConfig): Promise<operations.ItemsResponse>;
    /**
     * Memberships (Active)
     *
     * @remarks
     * Memberships (Active)
     */
    membershipsActive(req: operations.MembershipsActiveRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsActiveResponse>;
    /**
     * Memberships by Team (Active)
     *
     * @remarks
     * Memberships by Team (Active)
     */
    membershipsByTeamActive(req: operations.MembershipsByTeamActiveRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsByTeamActiveResponse>;
    /**
     * Memberships by Team (Historical)
     *
     * @remarks
     * Memberships by Team (Historical)
     */
    membershipsByTeamHistorical(req: operations.MembershipsByTeamHistoricalRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsByTeamHistoricalResponse>;
    /**
     * Memberships (Historical)
     *
     * @remarks
     * Memberships (Historical)
     */
    membershipsHistorical(req: operations.MembershipsHistoricalRequest, config?: AxiosRequestConfig): Promise<operations.MembershipsHistoricalResponse>;
    /**
     * Player
     *
     * @remarks
     * Player
     */
    player(req: operations.PlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerResponse>;
    /**
     * Players
     *
     * @remarks
     * Players
     */
    players(req: operations.PlayersRequest, config?: AxiosRequestConfig): Promise<operations.PlayersResponse>;
    /**
     * Players by Team
     *
     * @remarks
     * Players by Team
     */
    playersByTeam(req: operations.PlayersByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayersByTeamResponse>;
    /**
     * Schedule
     *
     * @remarks
     * Schedule
     */
    schedule(req: operations.ScheduleRequest, config?: AxiosRequestConfig): Promise<operations.ScheduleResponse>;
    /**
     * Season Teams
     *
     * @remarks
     * Season Teams
     */
    seasonTeams(req: operations.SeasonTeamsRequest, config?: AxiosRequestConfig): Promise<operations.SeasonTeamsResponse>;
    /**
     * Spells
     *
     * @remarks
     * Areas (Countries)
     */
    spells(req: operations.SpellsRequest, config?: AxiosRequestConfig): Promise<operations.SpellsResponse>;
    /**
     * Standings
     *
     * @remarks
     * Standings
     */
    standings(req: operations.StandingsRequest, config?: AxiosRequestConfig): Promise<operations.StandingsResponse>;
    /**
     * Teams
     *
     * @remarks
     * Teams
     */
    teams(req: operations.TeamsRequest, config?: AxiosRequestConfig): Promise<operations.TeamsResponse>;
    /**
     * Venues
     *
     * @remarks
     * Venues
     */
    venues(req: operations.VenuesRequest, config?: AxiosRequestConfig): Promise<operations.VenuesResponse>;
}
