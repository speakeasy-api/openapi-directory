import { SpeakeasyBase } from "../../../internal/utils";
import { SearchApplicationQueryStats } from "./searchapplicationquerystats";
/**
 * Response format for getting query stats for a search application between given dates.
 */
export declare class GetSearchApplicationQueryStatsResponse extends SpeakeasyBase {
    /**
     * Query stats per date for a search application.
     */
    stats?: SearchApplicationQueryStats[];
    /**
     * Total successful query count (status code 200) for the given date range.
     */
    totalQueryCount?: string;
}
