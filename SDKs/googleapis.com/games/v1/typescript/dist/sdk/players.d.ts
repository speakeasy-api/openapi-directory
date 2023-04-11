import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Players {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`.
     */
    gamesPlayersGet(req: operations.GamesPlayersGetRequest, security: operations.GamesPlayersGetSecurity, config?: AxiosRequestConfig): Promise<operations.GamesPlayersGetResponse>;
    /**
     * Get the application player ids for the currently authenticated player across all requested games by the same developer as the calling application. This will only return ids for players that actually have an id (scoped or otherwise) with that game.
     */
    gamesPlayersGetMultipleApplicationPlayerIds(req: operations.GamesPlayersGetMultipleApplicationPlayerIdsRequest, security: operations.GamesPlayersGetMultipleApplicationPlayerIdsSecurity, config?: AxiosRequestConfig): Promise<operations.GamesPlayersGetMultipleApplicationPlayerIdsResponse>;
    /**
     * Retrieves scoped player identifiers for currently authenticated user.
     */
    gamesPlayersGetScopedPlayerIds(req: operations.GamesPlayersGetScopedPlayerIdsRequest, security: operations.GamesPlayersGetScopedPlayerIdsSecurity, config?: AxiosRequestConfig): Promise<operations.GamesPlayersGetScopedPlayerIdsResponse>;
    /**
     * Get the collection of players for the currently authenticated user.
     */
    gamesPlayersList(req: operations.GamesPlayersListRequest, security: operations.GamesPlayersListSecurity, config?: AxiosRequestConfig): Promise<operations.GamesPlayersListResponse>;
}
