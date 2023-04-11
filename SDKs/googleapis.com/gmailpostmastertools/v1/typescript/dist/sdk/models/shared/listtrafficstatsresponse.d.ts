import { SpeakeasyBase } from "../../../internal/utils";
import { TrafficStats } from "./trafficstats";
/**
 * Response message for ListTrafficStats.
 */
export declare class ListTrafficStatsResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * The list of TrafficStats.
     */
    trafficStats?: TrafficStats[];
}
