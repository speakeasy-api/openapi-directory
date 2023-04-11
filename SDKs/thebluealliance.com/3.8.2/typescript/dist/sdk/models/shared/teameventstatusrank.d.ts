import { SpeakeasyBase } from "../../../internal/utils";
import { WLTRecord } from "./wltrecord";
export declare class TeamEventStatusRankRanking extends SpeakeasyBase {
    /**
     * Number of matches the team was disqualified for.
     */
    dq?: number;
    /**
     * Number of matches played.
     */
    matchesPlayed?: number;
    /**
     * For some years, average qualification score. Can be null.
     */
    qualAverage?: number;
    /**
     * Relative rank of this team.
     */
    rank?: number;
    /**
     * A Win-Loss-Tie record for a team, or an alliance.
     */
    record?: WLTRecord;
    /**
     * Ordered list of values used to determine the rank. See the `sort_order_info` property for the name of each value.
     */
    sortOrders?: number[];
    /**
     * TBA team key for this rank.
     */
    teamKey?: string;
}
export declare class TeamEventStatusRankSortOrderInfo extends SpeakeasyBase {
    /**
     * The descriptive name of the value used to sort the ranking.
     */
    name?: string;
    /**
     * The number of digits of precision used for this value, eg `2` would correspond to a value of `101.11` while `0` would correspond to `101`.
     */
    precision?: number;
}
export declare class TeamEventStatusRank extends SpeakeasyBase {
    /**
     * Number of teams ranked.
     */
    numTeams?: number;
    ranking?: TeamEventStatusRankRanking;
    /**
     * Ordered list of names corresponding to the elements of the `sort_orders` array.
     */
    sortOrderInfo?: TeamEventStatusRankSortOrderInfo[];
    status?: string;
}
