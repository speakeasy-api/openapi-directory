import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An achievement unlock response
 */
export declare class AchievementUnlockResponse extends SpeakeasyBase {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUnlockResponse`.
     */
    kind?: string;
    /**
     * Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player).
     */
    newlyUnlocked?: boolean;
}
