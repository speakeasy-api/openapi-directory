import { SpeakeasyBase } from "../../../internal/utils";
import { GamesPlayerLevelResource } from "./gamesplayerlevelresource";
/**
 * 1P/3P metadata about the player's experience.
 */
export declare class GamesPlayerExperienceInfoResource extends SpeakeasyBase {
    /**
     * The current number of experience points for the player.
     */
    currentExperiencePoints?: string;
    /**
     * 1P/3P metadata about a user's level.
     */
    currentLevel?: GamesPlayerLevelResource;
    /**
     * The timestamp when the player was leveled up, in millis since Unix epoch UTC.
     */
    lastLevelUpTimestampMillis?: string;
    /**
     * 1P/3P metadata about a user's level.
     */
    nextLevel?: GamesPlayerLevelResource;
}
