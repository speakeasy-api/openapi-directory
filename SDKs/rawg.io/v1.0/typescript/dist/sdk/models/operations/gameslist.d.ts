import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GamesListRequest extends SpeakeasyBase {
    /**
     * Filter by creators, for example: `78,28` or `cris-velasco,mike-morasky`.
     */
    creators?: string;
    /**
     * Filter by a release date, for example: `2010-01-01,2018-12-31.1960-01-01,1969-12-31`.
     */
    dates?: string;
    /**
     * Filter by developers, for example: `1612,18893` or `valve-software,feral-interactive`.
     */
    developers?: string;
    /**
     * Exclude additions.
     */
    excludeAdditions?: boolean;
    /**
     * Exclude games from a particular collection, for example: `123`.
     */
    excludeCollection?: number;
    /**
     * Exclude games which included in a game series.
     */
    excludeGameSeries?: boolean;
    /**
     * Exclude games which have additions.
     */
    excludeParents?: boolean;
    /**
     * Exclude stores, for example: `5,6`.
     */
    excludeStores?: string;
    /**
     * Filter by genres, for example: `4,51` or `action,indie`.
     */
    genres?: string;
    /**
     * Filter by a metacritic rating, for example: `80,100`.
     */
    metacritic?: string;
    /**
     * Available fields: `name`, `released`, `added`, `created`, `updated`, `rating`, `metacritic`. You can reverse the sort order adding a hyphen, for example: `-released`.
     */
    ordering?: string;
    /**
     * A page number within the paginated result set.
     */
    page?: number;
    /**
     * Number of results to return per page.
     */
    pageSize?: number;
    /**
     * Filter by parent platforms, for example: `1,2,3`.
     */
    parentPlatforms?: string;
    /**
     * Filter by platforms, for example: `4,5`.
     */
    platforms?: string;
    /**
     * Filter by platforms count, for example: `1`.
     */
    platformsCount?: number;
    /**
     * Filter by publishers, for example: `354,20987` or `electronic-arts,microsoft-studios`.
     */
    publishers?: string;
    /**
     * Search query.
     */
    search?: string;
    /**
     * Mark the search query as exact.
     */
    searchExact?: boolean;
    /**
     * Disable fuzziness for the search query.
     */
    searchPrecise?: boolean;
    /**
     * Filter by stores, for example: `5,6`.
     */
    stores?: string;
    /**
     * Filter by tags, for example: `31,7` or `singleplayer,multiplayer`.
     */
    tags?: string;
    /**
     * Filter by an update date, for example: `2020-12-01,2020-12-31`.
     */
    updated?: string;
}
export declare class GamesList200ApplicationJSON extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Game[];
}
export declare class GamesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    gamesList200ApplicationJSONObject?: GamesList200ApplicationJSON;
}
