import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Events {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
     */
    gamesManagementEventsReset(req: operations.GamesManagementEventsResetRequest, security: operations.GamesManagementEventsResetSecurity, config?: AxiosRequestConfig): Promise<operations.GamesManagementEventsResetResponse>;
    /**
     * Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
     */
    gamesManagementEventsResetAll(req: operations.GamesManagementEventsResetAllRequest, security: operations.GamesManagementEventsResetAllSecurity, config?: AxiosRequestConfig): Promise<operations.GamesManagementEventsResetAllResponse>;
    /**
     * Resets all draft events for all players. This method is only available to user accounts for your developer console.
     */
    gamesManagementEventsResetAllForAllPlayers(req: operations.GamesManagementEventsResetAllForAllPlayersRequest, security: operations.GamesManagementEventsResetAllForAllPlayersSecurity, config?: AxiosRequestConfig): Promise<operations.GamesManagementEventsResetAllForAllPlayersResponse>;
    /**
     * Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.
     */
    gamesManagementEventsResetForAllPlayers(req: operations.GamesManagementEventsResetForAllPlayersRequest, security: operations.GamesManagementEventsResetForAllPlayersSecurity, config?: AxiosRequestConfig): Promise<operations.GamesManagementEventsResetForAllPlayersResponse>;
    /**
     * Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.
     */
    gamesManagementEventsResetMultipleForAllPlayers(req: operations.GamesManagementEventsResetMultipleForAllPlayersRequest, security: operations.GamesManagementEventsResetMultipleForAllPlayersSecurity, config?: AxiosRequestConfig): Promise<operations.GamesManagementEventsResetMultipleForAllPlayersResponse>;
}
