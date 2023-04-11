import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An automated bidding strategy to help get the most conversion value for your campaigns while spending your budget.
 */
export declare class GoogleAdsSearchads360V0CommonMaximizeConversionValue extends SpeakeasyBase {
    /**
     * Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only.
     */
    cpcBidCeilingMicros?: string;
    /**
     * Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only.
     */
    cpcBidFloorMicros?: string;
    /**
     * The target return on ad spend (ROAS) option. If set, the bid strategy will maximize revenue while averaging the target return on ad spend. If the target ROAS is high, the bid strategy may not be able to spend the full budget. If the target ROAS is not set, the bid strategy will aim to achieve the highest possible ROAS for the budget.
     */
    targetRoas?: number;
}
