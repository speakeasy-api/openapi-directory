import { SpeakeasyBase } from "../../../internal/utils";
import { LocalizedStringBundle } from "./localizedstringbundle";
/**
 * An achievement configuration detail.
 */
export declare class AchievementConfigurationDetail extends SpeakeasyBase {
    /**
     * A localized string bundle resource.
     */
    description?: LocalizedStringBundle;
    /**
     * The icon url of this achievement. Writes to this field are ignored.
     */
    iconUrl?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfigurationDetail`.
     */
    kind?: string;
    /**
     * A localized string bundle resource.
     */
    name?: LocalizedStringBundle;
    /**
     * Point value for the achievement.
     */
    pointValue?: number;
    /**
     * The sort rank of this achievement. Writes to this field are ignored.
     */
    sortRank?: number;
}
