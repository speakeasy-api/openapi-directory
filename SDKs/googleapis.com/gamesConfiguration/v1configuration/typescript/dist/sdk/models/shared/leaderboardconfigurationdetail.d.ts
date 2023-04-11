import { SpeakeasyBase } from "../../../internal/utils";
import { GamesNumberFormatConfiguration } from "./gamesnumberformatconfiguration";
import { LocalizedStringBundle } from "./localizedstringbundle";
/**
 * A leaderboard configuration detail.
 */
export declare class LeaderboardConfigurationDetail extends SpeakeasyBase {
    /**
     * The icon url of this leaderboard. Writes to this field are ignored.
     */
    iconUrl?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfigurationDetail`.
     */
    kind?: string;
    /**
     * A localized string bundle resource.
     */
    name?: LocalizedStringBundle;
    /**
     * A number format resource.
     */
    scoreFormat?: GamesNumberFormatConfiguration;
    /**
     * The sort rank of this leaderboard. Writes to this field are ignored.
     */
    sortRank?: number;
}
