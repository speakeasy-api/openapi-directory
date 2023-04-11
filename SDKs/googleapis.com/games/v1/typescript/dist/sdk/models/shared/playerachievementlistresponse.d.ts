import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerAchievement } from "./playerachievement";
/**
 * A list of achievement objects.
 */
export declare class PlayerAchievementListResponse extends SpeakeasyBase {
    /**
     * The achievements.
     */
    items?: PlayerAchievement[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#playerAchievementListResponse`.
     */
    kind?: string;
    /**
     * Token corresponding to the next page of results.
     */
    nextPageToken?: string;
}
