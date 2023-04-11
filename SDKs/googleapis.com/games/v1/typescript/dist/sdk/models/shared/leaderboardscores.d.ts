import { SpeakeasyBase } from "../../../internal/utils";
import { LeaderboardEntry } from "./leaderboardentry";
/**
 * A ListScores response.
 */
export declare class LeaderboardScores extends SpeakeasyBase {
    /**
     * The scores in the leaderboard.
     */
    items?: LeaderboardEntry[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardScores`.
     */
    kind?: string;
    /**
     * The pagination token for the next page of results.
     */
    nextPageToken?: string;
    /**
     * The total number of scores in the leaderboard.
     */
    numScores?: string;
    /**
     * The Leaderboard Entry resource.
     */
    playerScore?: LeaderboardEntry;
    /**
     * The pagination token for the previous page of results.
     */
    prevPageToken?: string;
}
