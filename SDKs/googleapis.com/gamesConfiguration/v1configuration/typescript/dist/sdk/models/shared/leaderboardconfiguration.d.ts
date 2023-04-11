import { SpeakeasyBase } from "../../../internal/utils";
import { LeaderboardConfigurationDetail } from "./leaderboardconfigurationdetail";
export declare enum LeaderboardConfigurationScoreOrderEnum {
    ScoreOrderUnspecified = "SCORE_ORDER_UNSPECIFIED",
    LargerIsBetter = "LARGER_IS_BETTER",
    SmallerIsBetter = "SMALLER_IS_BETTER"
}
/**
 * An leaderboard configuration resource.
 */
export declare class LeaderboardConfiguration extends SpeakeasyBase {
    /**
     * A leaderboard configuration detail.
     */
    draft?: LeaderboardConfigurationDetail;
    /**
     * The ID of the leaderboard.
     */
    id?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfiguration`.
     */
    kind?: string;
    /**
     * A leaderboard configuration detail.
     */
    published?: LeaderboardConfigurationDetail;
    /**
     * Maximum score that can be posted to this leaderboard.
     */
    scoreMax?: string;
    /**
     * Minimum score that can be posted to this leaderboard.
     */
    scoreMin?: string;
    scoreOrder?: LeaderboardConfigurationScoreOrderEnum;
    /**
     * The token for this resource.
     */
    token?: string;
}
