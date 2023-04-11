import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An achievement set steps at least response.
 */
export declare class AchievementSetStepsAtLeastResponse extends SpeakeasyBase {
    /**
     * The current steps recorded for this incremental achievement.
     */
    currentSteps?: number;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementSetStepsAtLeastResponse`.
     */
    kind?: string;
    /**
     * Whether the current steps for the achievement has reached the number of steps required to unlock.
     */
    newlyUnlocked?: boolean;
}
