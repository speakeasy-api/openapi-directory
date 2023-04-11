import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A score rank in a leaderboard.
 */
export declare class LeaderboardScoreRank extends SpeakeasyBase {
    /**
     * The number of scores in the leaderboard as a string.
     */
    formattedNumScores?: string;
    /**
     * The rank in the leaderboard as a string.
     */
    formattedRank?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardScoreRank`.
     */
    kind?: string;
    /**
     * The number of scores in the leaderboard.
     */
    numScores?: string;
    /**
     * The rank in the leaderboard.
     */
    rank?: string;
}
