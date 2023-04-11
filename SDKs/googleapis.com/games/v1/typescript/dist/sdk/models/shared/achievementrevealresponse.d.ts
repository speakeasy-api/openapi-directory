import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current state of the achievement for which a reveal was attempted. This might be `UNLOCKED` if the achievement was already unlocked.
 */
export declare enum AchievementRevealResponseCurrentStateEnum {
    RevealAchievementStateUnspecified = "REVEAL_ACHIEVEMENT_STATE_UNSPECIFIED",
    Revealed = "REVEALED",
    Unlocked = "UNLOCKED"
}
/**
 * An achievement reveal response
 */
export declare class AchievementRevealResponse extends SpeakeasyBase {
    /**
     * The current state of the achievement for which a reveal was attempted. This might be `UNLOCKED` if the achievement was already unlocked.
     */
    currentState?: AchievementRevealResponseCurrentStateEnum;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementRevealResponse`.
     */
    kind?: string;
}
