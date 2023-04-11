import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An achievement reset response.
 */
export declare class AchievementResetResponse extends SpeakeasyBase {
    /**
     * The current state of the achievement. This is the same as the initial state of the achievement. Possible values are: - "`HIDDEN`"- Achievement is hidden. - "`REVEALED`" - Achievement is revealed. - "`UNLOCKED`" - Achievement is unlocked.
     */
    currentState?: string;
    /**
     * The ID of an achievement for which player state has been updated.
     */
    definitionId?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#achievementResetResponse`.
     */
    kind?: string;
    /**
     * Flag to indicate if the requested update actually occurred.
     */
    updateOccurred?: boolean;
}
