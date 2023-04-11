import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the achievement.
 */
export declare enum PlayerAchievementAchievementStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Hidden = "HIDDEN",
    Revealed = "REVEALED",
    Unlocked = "UNLOCKED"
}
/**
 * An achievement object.
 */
export declare class PlayerAchievement extends SpeakeasyBase {
    /**
     * The state of the achievement.
     */
    achievementState?: PlayerAchievementAchievementStateEnum;
    /**
     * The current steps for an incremental achievement.
     */
    currentSteps?: number;
    /**
     * Experience points earned for the achievement. This field is absent for achievements that have not yet been unlocked and 0 for achievements that have been unlocked by testers but that are unpublished.
     */
    experiencePoints?: string;
    /**
     * The current steps for an incremental achievement as a string.
     */
    formattedCurrentStepsString?: string;
    /**
     * The ID of the achievement.
     */
    id?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#playerAchievement`.
     */
    kind?: string;
    /**
     * The timestamp of the last modification to this achievement's state.
     */
    lastUpdatedTimestamp?: string;
}
