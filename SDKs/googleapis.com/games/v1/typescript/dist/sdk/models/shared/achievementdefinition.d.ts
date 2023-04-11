import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the achievement.
 */
export declare enum AchievementDefinitionAchievementTypeEnum {
    AchievementTypeUnspecified = "ACHIEVEMENT_TYPE_UNSPECIFIED",
    Standard = "STANDARD",
    Incremental = "INCREMENTAL"
}
/**
 * The initial state of the achievement.
 */
export declare enum AchievementDefinitionInitialStateEnum {
    InitialAchievementStateUnspecified = "INITIAL_ACHIEVEMENT_STATE_UNSPECIFIED",
    Hidden = "HIDDEN",
    Revealed = "REVEALED",
    Unlocked = "UNLOCKED"
}
/**
 * An achievement definition object.
 */
export declare class AchievementDefinition extends SpeakeasyBase {
    /**
     * The type of the achievement.
     */
    achievementType?: AchievementDefinitionAchievementTypeEnum;
    /**
     * The description of the achievement.
     */
    description?: string;
    /**
     * Experience points which will be earned when unlocking this achievement.
     */
    experiencePoints?: string;
    /**
     * The total steps for an incremental achievement as a string.
     */
    formattedTotalSteps?: string;
    /**
     * The ID of the achievement.
     */
    id?: string;
    /**
     * The initial state of the achievement.
     */
    initialState?: AchievementDefinitionInitialStateEnum;
    /**
     * Indicates whether the revealed icon image being returned is a default image, or is provided by the game.
     */
    isRevealedIconUrlDefault?: boolean;
    /**
     * Indicates whether the unlocked icon image being returned is a default image, or is game-provided.
     */
    isUnlockedIconUrlDefault?: boolean;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementDefinition`.
     */
    kind?: string;
    /**
     * The name of the achievement.
     */
    name?: string;
    /**
     * The image URL for the revealed achievement icon.
     */
    revealedIconUrl?: string;
    /**
     * The total steps for an incremental achievement.
     */
    totalSteps?: number;
    /**
     * The image URL for the unlocked achievement icon.
     */
    unlockedIconUrl?: string;
}
