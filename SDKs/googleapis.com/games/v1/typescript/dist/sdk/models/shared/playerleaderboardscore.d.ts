import { SpeakeasyBase } from "../../../internal/utils";
import { LeaderboardScoreRank } from "./leaderboardscorerank";
/**
 * The time span of this score.
 */
export declare enum PlayerLeaderboardScoreTimeSpanEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED",
    AllTime = "ALL_TIME",
    Weekly = "WEEKLY",
    Daily = "DAILY"
}
/**
 * A player leaderboard score object.
 */
export declare class PlayerLeaderboardScore extends SpeakeasyBase {
    /**
     * A score rank in a leaderboard.
     */
    friendsRank?: LeaderboardScoreRank;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#playerLeaderboardScore`.
     */
    kind?: string;
    /**
     * The ID of the leaderboard this score is in.
     */
    leaderboardId?: string;
    /**
     * A score rank in a leaderboard.
     */
    publicRank?: LeaderboardScoreRank;
    /**
     * The formatted value of this score.
     */
    scoreString?: string;
    /**
     * Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
     */
    scoreTag?: string;
    /**
     * The numerical value of this score.
     */
    scoreValue?: string;
    /**
     * A score rank in a leaderboard.
     */
    socialRank?: LeaderboardScoreRank;
    /**
     * The time span of this score.
     */
    timeSpan?: PlayerLeaderboardScoreTimeSpanEnum;
    /**
     * The timestamp at which this score was recorded, in milliseconds since the epoch in UTC.
     */
    writeTimestamp?: string;
}
