import { SpeakeasyBase } from "../../../internal/utils";
import { LeaderboardConfiguration } from "./leaderboardconfiguration";
/**
 * A ListConfigurations response.
 */
export declare class LeaderboardConfigurationListResponse extends SpeakeasyBase {
    /**
     * The leaderboard configurations.
     */
    items?: LeaderboardConfiguration[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfigurationListResponse`.
     */
    kind?: string;
    /**
     * The pagination token for the next page of results.
     */
    nextPageToken?: string;
}
