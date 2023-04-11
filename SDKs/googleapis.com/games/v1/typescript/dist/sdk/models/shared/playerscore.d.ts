import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The time span for this player score.
 */
export declare enum PlayerScoreTimeSpanEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED",
    AllTime = "ALL_TIME",
    Weekly = "WEEKLY",
    Daily = "DAILY"
}
/**
 * A player score.
 */
export declare class PlayerScore extends SpeakeasyBase {
    /**
     * The formatted score for this player score.
     */
    formattedScore?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScore`.
     */
    kind?: string;
    /**
     * The numerical value for this player score.
     */
    score?: string;
    /**
     * Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
     */
    scoreTag?: string;
    /**
     * The time span for this player score.
     */
    timeSpan?: PlayerScoreTimeSpanEnum;
}
