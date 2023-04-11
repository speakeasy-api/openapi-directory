import { SpeakeasyBase } from "../../../internal/utils";
import { Player } from "./player";
import { PlayerLeaderboardScore } from "./playerleaderboardscore";
/**
 * A list of player leaderboard scores.
 */
export declare class PlayerLeaderboardScoreListResponse extends SpeakeasyBase {
    /**
     * The leaderboard scores.
     */
    items?: PlayerLeaderboardScore[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#playerLeaderboardScoreListResponse`.
     */
    kind?: string;
    /**
     * The pagination token for the next page of results.
     */
    nextPageToken?: string;
    /**
     * A Player resource.
     */
    player?: Player;
}
