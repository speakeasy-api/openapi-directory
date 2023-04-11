import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A list of reset leaderboard entry resources.
 */
export declare class PlayerScoreResetResponse extends SpeakeasyBase {
    /**
     * The ID of an leaderboard for which player state has been updated.
     */
    definitionId?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#playerScoreResetResponse`.
     */
    kind?: string;
    /**
     * The time spans of the updated score. Possible values are: - "`ALL_TIME`" - The score is an all-time score. - "`WEEKLY`" - The score is a weekly score. - "`DAILY`" - The score is a daily score.
     */
    resetScoreTimeSpans?: string[];
}
