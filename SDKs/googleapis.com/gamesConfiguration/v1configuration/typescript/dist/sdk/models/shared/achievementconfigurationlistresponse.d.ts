import { SpeakeasyBase } from "../../../internal/utils";
import { AchievementConfiguration } from "./achievementconfiguration";
/**
 * A ListConfigurations response.
 */
export declare class AchievementConfigurationListResponse extends SpeakeasyBase {
    /**
     * The achievement configurations.
     */
    items?: AchievementConfiguration[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfigurationListResponse`.
     */
    kind?: string;
    /**
     * The pagination token for the next page of results.
     */
    nextPageToken?: string;
}
