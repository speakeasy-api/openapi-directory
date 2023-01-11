import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Games {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * gamesAchievementsRead - Get a list of game achievements.
    **/
    gamesAchievementsRead(req: operations.GamesAchievementsReadRequest, config?: AxiosRequestConfig): Promise<operations.GamesAchievementsReadResponse>;
    /**
     * gamesAdditionsList - Get a list of DLC's for the game, GOTY and other editions, companion apps, etc.
    **/
    gamesAdditionsList(req: operations.GamesAdditionsListRequest, config?: AxiosRequestConfig): Promise<operations.GamesAdditionsListResponse>;
    /**
     * gamesDevelopmentTeamList - Get a list of individual creators that were part of the development team.
    **/
    gamesDevelopmentTeamList(req: operations.GamesDevelopmentTeamListRequest, config?: AxiosRequestConfig): Promise<operations.GamesDevelopmentTeamListResponse>;
    /**
     * gamesGameSeriesList - Get a list of games that are part of the same series.
    **/
    gamesGameSeriesList(req: operations.GamesGameSeriesListRequest, config?: AxiosRequestConfig): Promise<operations.GamesGameSeriesListResponse>;
    /**
     * gamesList - Get a list of games.
    **/
    gamesList(req: operations.GamesListRequest, config?: AxiosRequestConfig): Promise<operations.GamesListResponse>;
    /**
     * gamesMoviesRead - Get a list of game trailers.
    **/
    gamesMoviesRead(req: operations.GamesMoviesReadRequest, config?: AxiosRequestConfig): Promise<operations.GamesMoviesReadResponse>;
    /**
     * gamesParentGamesList - Get a list of parent games for DLC's and editions.
    **/
    gamesParentGamesList(req: operations.GamesParentGamesListRequest, config?: AxiosRequestConfig): Promise<operations.GamesParentGamesListResponse>;
    /**
     * gamesRead - Get details of the game.
    **/
    gamesRead(req: operations.GamesReadRequest, config?: AxiosRequestConfig): Promise<operations.GamesReadResponse>;
    /**
     * gamesRedditRead - Get a list of most recent posts from the game's subreddit.
    **/
    gamesRedditRead(req: operations.GamesRedditReadRequest, config?: AxiosRequestConfig): Promise<operations.GamesRedditReadResponse>;
    /**
     * gamesScreenshotsList - Get screenshots for the game.
    **/
    gamesScreenshotsList(req: operations.GamesScreenshotsListRequest, config?: AxiosRequestConfig): Promise<operations.GamesScreenshotsListResponse>;
    /**
     * gamesStoresList - Get links to the stores that sell the game.
    **/
    gamesStoresList(req: operations.GamesStoresListRequest, config?: AxiosRequestConfig): Promise<operations.GamesStoresListResponse>;
    /**
     * gamesSuggestedRead - Get a list of visually similar games, available only for business and enterprise API users.
    **/
    gamesSuggestedRead(req: operations.GamesSuggestedReadRequest, config?: AxiosRequestConfig): Promise<operations.GamesSuggestedReadResponse>;
    /**
     * gamesTwitchRead - Get streams on Twitch associated with the game, available only for business and enterprise API users.
    **/
    gamesTwitchRead(req: operations.GamesTwitchReadRequest, config?: AxiosRequestConfig): Promise<operations.GamesTwitchReadResponse>;
    /**
     * gamesYoutubeRead - Get videos from YouTube associated with the game, available only for business and enterprise API users.
    **/
    gamesYoutubeRead(req: operations.GamesYoutubeReadRequest, config?: AxiosRequestConfig): Promise<operations.GamesYoutubeReadResponse>;
}
