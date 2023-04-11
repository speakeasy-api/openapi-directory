import { SpeakeasyBase } from "../../../internal/utils";
import { WLTRecord } from "./wltrecord";
export declare class EventRankingExtraStatsInfo extends SpeakeasyBase {
    /**
     * Name of the field used in the `extra_stats` array.
     */
    name: string;
    /**
     * Integer expressing the number of digits of precision in the number provided in `sort_orders`.
     */
    precision: number;
}
export declare class EventRankingRankings extends SpeakeasyBase {
    /**
     * Number of times disqualified.
     */
    dq: number;
    /**
     * Additional special data on the team's performance calculated by TBA.
     */
    extraStats?: number[];
    /**
     * Number of matches played by this team.
     */
    matchesPlayed: number;
    /**
     * The average match score during qualifications. Year specific. May be null if not relevant for a given year.
     */
    qualAverage?: number;
    /**
     * The team's rank at the event as provided by FIRST.
     */
    rank: number;
    /**
     * A Win-Loss-Tie record for a team, or an alliance.
     */
    record: WLTRecord;
    /**
     * Additional year-specific information, may be null. See parent `sort_order_info` for details.
     */
    sortOrders?: number[];
    /**
     * The team with this rank.
     */
    teamKey: string;
}
export declare class EventRankingSortOrderInfo extends SpeakeasyBase {
    /**
     * Name of the field used in the `sort_order` array.
     */
    name: string;
    /**
     * Integer expressing the number of digits of precision in the number provided in `sort_orders`.
     */
    precision: number;
}
/**
 * Successful response
 */
export declare class EventRanking extends SpeakeasyBase {
    /**
     * List of special TBA-generated values provided in the `extra_stats` array for each item.
     */
    extraStatsInfo?: EventRankingExtraStatsInfo[];
    /**
     * List of rankings at the event.
     */
    rankings: EventRankingRankings[];
    /**
     * List of year-specific values provided in the `sort_orders` array for each team.
     */
    sortOrderInfo: EventRankingSortOrderInfo[];
}
