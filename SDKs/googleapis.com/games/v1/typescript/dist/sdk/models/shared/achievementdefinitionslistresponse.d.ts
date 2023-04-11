import { SpeakeasyBase } from "../../../internal/utils";
import { AchievementDefinition } from "./achievementdefinition";
/**
 * A list of achievement definition objects.
 */
export declare class AchievementDefinitionsListResponse extends SpeakeasyBase {
    /**
     * The achievement definitions.
     */
    items?: AchievementDefinition[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementDefinitionsListResponse`.
     */
    kind?: string;
    /**
     * Token corresponding to the next page of results.
     */
    nextPageToken?: string;
}
