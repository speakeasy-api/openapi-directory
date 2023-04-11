import { SpeakeasyBase } from "../../../internal/utils";
/**
 * 1P/3P metadata about a user's level.
 */
export declare class GamesPlayerLevelResource extends SpeakeasyBase {
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
