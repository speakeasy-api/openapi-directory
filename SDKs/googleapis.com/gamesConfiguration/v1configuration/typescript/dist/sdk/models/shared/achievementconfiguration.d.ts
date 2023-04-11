import { SpeakeasyBase } from "../../../internal/utils";
import { AchievementConfigurationDetail } from "./achievementconfigurationdetail";
/**
 * The type of the achievement.
 */
export declare enum AchievementConfigurationAchievementTypeEnum {
    AchievementTypeUnspecified = "ACHIEVEMENT_TYPE_UNSPECIFIED",
    Standard = "STANDARD",
    Incremental = "INCREMENTAL"
}
/**
 * The initial state of the achievement.
 */
export declare enum AchievementConfigurationInitialStateEnum {
    InitialStateUnspecified = "INITIAL_STATE_UNSPECIFIED",
    Hidden = "HIDDEN",
    Revealed = "REVEALED"
}
/**
 * An achievement configuration resource.
 */
export declare class AchievementConfiguration extends SpeakeasyBase {
    /**
     * The type of the achievement.
     */
    achievementType?: AchievementConfigurationAchievementTypeEnum;
    /**
     * An achievement configuration detail.
     */
    draft?: AchievementConfigurationDetail;
    /**
     * The ID of the achievement.
     */
    id?: string;
    /**
     * The initial state of the achievement.
     */
    initialState?: AchievementConfigurationInitialStateEnum;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfiguration`.
     */
    kind?: string;
    /**
     * An achievement configuration detail.
     */
    published?: AchievementConfigurationDetail;
    /**
     * Steps to unlock. Only applicable to incremental achievements.
     */
    stepsToUnlock?: number;
    /**
     * The token for this resource.
     */
    token?: string;
}
