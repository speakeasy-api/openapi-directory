import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerLevel } from "./playerlevel";
/**
 * 1P/3P metadata about the player's experience.
 */
export declare class PlayerExperienceInfo extends SpeakeasyBase {
    /**
     * The current number of experience points for the player.
     */
    currentExperiencePoints?: string;
    /**
     * 1P/3P metadata about a user's level.
     */
    currentLevel?: PlayerLevel;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#playerExperienceInfo`.
     */
    kind?: string;
    /**
     * The timestamp when the player was leveled up, in millis since Unix epoch UTC.
     */
    lastLevelUpTimestampMillis?: string;
    /**
     * 1P/3P metadata about a user's level.
     */
    nextLevel?: PlayerLevel;
}
