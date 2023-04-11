import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The payload to request to increment an achievement.
 */
export declare class GamesAchievementSetStepsAtLeast extends SpeakeasyBase {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#GamesAchievementSetStepsAtLeast`.
     */
    kind?: string;
    /**
     * The minimum number of steps for the achievement to be set to.
     */
    steps?: number;
}
