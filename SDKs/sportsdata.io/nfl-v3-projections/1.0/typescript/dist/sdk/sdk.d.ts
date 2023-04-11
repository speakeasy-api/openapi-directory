import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://azure-api.sportsdata.io/v3/nfl/projections", "https://azure-api.sportsdata.io/v3/nfl/projections"];
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
 * NFL projected stats API.
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
     * DFS Slate Ownership Projections by SlateID
     *
     * @remarks
     * Slate Ownership Projections for a specific slate. Projections are for GPP format ownership. Will return an empty list if the slate is not yet projected or not a slate we have projections for.
     */
    dfsSlateOwnershipProjectionsBySlateid(req: operations.DfsSlateOwnershipProjectionsBySlateidRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlateOwnershipProjectionsBySlateidResponse>;
    /**
     * DFS Slates by Date
     */
    dfsSlatesByDate(req: operations.DfsSlatesByDateRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesByDateResponse>;
    /**
     * DFS Slates by Week
     */
    dfsSlatesByWeek(req: operations.DfsSlatesByWeekRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesByWeekResponse>;
    /**
     * IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
     */
    idpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(req: operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse>;
    /**
     * IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
     */
    idpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries(req: operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse>;
    /**
     * IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
     */
    idpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries(req: operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse>;
    /**
     * Injured Players
     *
     * @remarks
     * This endpoint provides all currently injured NFL players, along with injury details.
     */
    injuredPlayers(req: operations.InjuredPlayersRequest, config?: AxiosRequestConfig): Promise<operations.InjuredPlayersResponse>;
    /**
     * Projected Fantasy Defense Game Stats (w/ DFS Salaries)
     */
    projectedFantasyDefenseGameStatsWDfsSalaries(req: operations.ProjectedFantasyDefenseGameStatsWDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedFantasyDefenseGameStatsWDfsSalariesResponse>;
    /**
     * Projected Fantasy Defense Season Stats (w/ ADP)
     */
    projectedFantasyDefenseSeasonStatsWAdp(req: operations.ProjectedFantasyDefenseSeasonStatsWAdpRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedFantasyDefenseSeasonStatsWAdpResponse>;
    /**
     * Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
     */
    projectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(req: operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse>;
    /**
     * Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
     */
    projectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries(req: operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse>;
    /**
     * Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
     */
    projectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries(req: operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse>;
    /**
     * Projected Player Season Stats by Player (w/ ADP)
     */
    projectedPlayerSeasonStatsByPlayerWAdp(req: operations.ProjectedPlayerSeasonStatsByPlayerWAdpRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerSeasonStatsByPlayerWAdpResponse>;
    /**
     * Projected Player Season Stats by Team (w/ ADP)
     */
    projectedPlayerSeasonStatsByTeamWAdp(req: operations.ProjectedPlayerSeasonStatsByTeamWAdpRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerSeasonStatsByTeamWAdpResponse>;
    /**
     * Projected Player Season Stats (w/ ADP)
     */
    projectedPlayerSeasonStatsWAdp(req: operations.ProjectedPlayerSeasonStatsWAdpRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerSeasonStatsWAdpResponse>;
    /**
     * Upcoming DFS Slate Ownership Projections
     *
     * @remarks
     * Grabs DFS Slates which have not yet started for which we have DFS Ownership projections.
     */
    upcomingDfsSlateOwnershipProjections(req: operations.UpcomingDfsSlateOwnershipProjectionsRequest, config?: AxiosRequestConfig): Promise<operations.UpcomingDfsSlateOwnershipProjectionsResponse>;
}
