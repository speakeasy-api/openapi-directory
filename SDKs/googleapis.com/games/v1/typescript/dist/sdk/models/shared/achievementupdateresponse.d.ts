import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the achievement.
 */
export declare enum AchievementUpdateResponseCurrentStateEnum {
    UpdatedAchievementStateUnspecified = "UPDATED_ACHIEVEMENT_STATE_UNSPECIFIED",
    Hidden = "HIDDEN",
    Revealed = "REVEALED",
    Unlocked = "UNLOCKED"
}
/**
 * An updated achievement.
 */
export declare class AchievementUpdateResponse extends SpeakeasyBase {
    /**
     * The achievement this update is was applied to.
     */
    achievementId?: string;
    /**
     * The current state of the achievement.
     */
    currentState?: AchievementUpdateResponseCurrentStateEnum;
    /**
     * The current steps recorded for this achievement if it is incremental.
     */
    currentSteps?: number;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateResponse`.
     */
    kind?: string;
    /**
     * Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player).
     */
    newlyUnlocked?: boolean;
    /**
     * Whether the requested updates actually affected the achievement.
     */
    updateOccurred?: boolean;
}
