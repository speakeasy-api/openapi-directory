import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An automated bidding strategy to help get the most conversions for your campaigns while spending your budget.
 */
export declare class GoogleAdsSearchads360V0CommonMaximizeConversions extends SpeakeasyBase {
    /**
     * Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only.
     */
    cpcBidCeilingMicros?: string;
    /**
     * Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only.
     */
    cpcBidFloorMicros?: string;
    /**
     * The target cost-per-action (CPA) option. This is the average amount that you would like to spend per conversion action specified in micro units of the bidding strategy's currency. If set, the bid strategy will get as many conversions as possible at or below the target cost-per-action. If the target CPA is not set, the bid strategy will aim to achieve the lowest possible CPA given the budget.
     */
    targetCpaMicros?: string;
}
