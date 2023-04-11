import { SpeakeasyBase } from "../../../internal/utils";
/**
 * How scores are ordered.
 */
export declare enum LeaderboardOrderEnum {
    ScoreOrderUnspecified = "SCORE_ORDER_UNSPECIFIED",
    LargerIsBetter = "LARGER_IS_BETTER",
    SmallerIsBetter = "SMALLER_IS_BETTER"
}
/**
 * The Leaderboard resource.
 */
export declare class Leaderboard extends SpeakeasyBase {
    /**
     * The icon for the leaderboard.
     */
    iconUrl?: string;
    /**
     * The leaderboard ID.
     */
    id?: string;
    /**
     * Indicates whether the icon image being returned is a default image, or is game-provided.
     */
    isIconUrlDefault?: boolean;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboard`.
     */
    kind?: string;
    /**
     * The name of the leaderboard.
     */
    name?: string;
    /**
     * How scores are ordered.
     */
    order?: LeaderboardOrderEnum;
}
