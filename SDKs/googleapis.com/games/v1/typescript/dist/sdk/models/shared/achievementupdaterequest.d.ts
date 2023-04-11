import { SpeakeasyBase } from "../../../internal/utils";
import { GamesAchievementIncrement } from "./gamesachievementincrement";
import { GamesAchievementSetStepsAtLeast } from "./gamesachievementsetstepsatleast";
/**
 * The type of update being applied.
 */
export declare enum AchievementUpdateRequestUpdateTypeEnum {
    AchievementUpdateTypeUnspecified = "ACHIEVEMENT_UPDATE_TYPE_UNSPECIFIED",
    Reveal = "REVEAL",
    Unlock = "UNLOCK",
    Increment = "INCREMENT",
    SetStepsAtLeast = "SET_STEPS_AT_LEAST"
}
/**
 * A request to update an achievement.
 */
export declare class AchievementUpdateRequest extends SpeakeasyBase {
    /**
     * The achievement this update is being applied to.
     */
    achievementId?: string;
    /**
     * The payload to request to increment an achievement.
     */
    incrementPayload?: GamesAchievementIncrement;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateRequest`.
     */
    kind?: string;
    /**
     * The payload to request to increment an achievement.
     */
    setStepsAtLeastPayload?: GamesAchievementSetStepsAtLeast;
    /**
     * The type of update being applied.
     */
    updateType?: AchievementUpdateRequestUpdateTypeEnum;
}
