import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An achievement increment response
 */
export declare class AchievementIncrementResponse extends SpeakeasyBase {
    /**
     * The current steps recorded for this incremental achievement.
     */
    currentSteps?: number;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementIncrementResponse`.
     */
    kind?: string;
    /**
     * Whether the current steps for the achievement has reached the number of steps required to unlock.
     */
    newlyUnlocked?: boolean;
}
