import { SpeakeasyBase } from "../../../internal/utils";
import { Leaderboard } from "./leaderboard";
/**
 * A list of leaderboard objects.
 */
export declare class LeaderboardListResponse extends SpeakeasyBase {
    /**
     * The leaderboards.
     */
    items?: Leaderboard[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardListResponse`.
     */
    kind?: string;
    /**
     * Token corresponding to the next page of results.
     */
    nextPageToken?: string;
}
