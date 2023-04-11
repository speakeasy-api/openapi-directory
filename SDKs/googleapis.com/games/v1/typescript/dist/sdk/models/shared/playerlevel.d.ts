import { SpeakeasyBase } from "../../../internal/utils";
/**
 * 1P/3P metadata about a user's level.
 */
export declare class PlayerLevel extends SpeakeasyBase {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#playerLevel`.
     */
    kind?: string;
    /**
     * The level for the user.
     */
    level?: number;
    /**
     * The maximum experience points for this level.
     */
    maxExperiencePoints?: string;
    /**
     * The minimum experience points for this level.
     */
    minExperiencePoints?: string;
}
