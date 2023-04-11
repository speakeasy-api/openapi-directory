import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The payload to request to increment an achievement.
 */
export declare class GamesAchievementIncrement extends SpeakeasyBase {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#GamesAchievementIncrement`.
     */
    kind?: string;
    /**
     * The requestId associated with an increment to an achievement.
     */
    requestId?: string;
    /**
     * The number of steps to be incremented.
     */
    steps?: number;
}
