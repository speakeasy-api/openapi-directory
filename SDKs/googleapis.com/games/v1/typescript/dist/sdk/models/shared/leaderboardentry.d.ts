import { SpeakeasyBase } from "../../../internal/utils";
import { Player } from "./player";
/**
 * The time span of this high score.
 */
export declare enum LeaderboardEntryTimeSpanEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED",
    AllTime = "ALL_TIME",
    Weekly = "WEEKLY",
    Daily = "DAILY"
}
/**
 * The Leaderboard Entry resource.
 */
export declare class LeaderboardEntry extends SpeakeasyBase {
    /**
     * The localized string for the numerical value of this score.
     */
    formattedScore?: string;
    /**
     * The localized string for the rank of this score for this leaderboard.
     */
    formattedScoreRank?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardEntry`.
     */
    kind?: string;
    /**
     * A Player resource.
     */
    player?: Player;
    /**
     * The rank of this score for this leaderboard.
     */
    scoreRank?: string;
    /**
     * Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
     */
    scoreTag?: string;
    /**
     * The numerical value of this score.
     */
    scoreValue?: string;
    /**
     * The time span of this high score.
     */
    timeSpan?: LeaderboardEntryTimeSpanEnum;
    /**
     * The timestamp at which this score was recorded, in milliseconds since the epoch in UTC.
     */
    writeTimestampMillis?: string;
}
