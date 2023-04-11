import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerScore } from "./playerscore";
export declare enum PlayerScoreResponseBeatenScoreTimeSpansEnum {
    ScoreTimeSpanUnspecified = "SCORE_TIME_SPAN_UNSPECIFIED",
    AllTime = "ALL_TIME",
    Weekly = "WEEKLY",
    Daily = "DAILY"
}
/**
 * A list of leaderboard entry resources.
 */
export declare class PlayerScoreResponse extends SpeakeasyBase {
    /**
     * The time spans where the submitted score is better than the existing score for that time span.
     */
    beatenScoreTimeSpans?: PlayerScoreResponseBeatenScoreTimeSpansEnum[];
    /**
     * The formatted value of the submitted score.
     */
    formattedScore?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScoreResponse`.
     */
    kind?: string;
    /**
     * The leaderboard ID that this score was submitted to.
     */
    leaderboardId?: string;
    /**
     * Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
     */
    scoreTag?: string;
    /**
     * The scores in time spans that have not been beaten. As an example, the submitted score may be better than the player's `DAILY` score, but not better than the player's scores for the `WEEKLY` or `ALL_TIME` time spans.
     */
    unbeatenScores?: PlayerScore[];
}
