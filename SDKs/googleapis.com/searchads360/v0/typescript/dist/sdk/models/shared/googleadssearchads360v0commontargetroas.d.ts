import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An automated bidding strategy that helps you maximize revenue while averaging a specific target return on ad spend (ROAS).
 */
export declare class GoogleAdsSearchads360V0CommonTargetRoas extends SpeakeasyBase {
    /**
     * Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies.
     */
    cpcBidCeilingMicros?: string;
    /**
     * Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies.
     */
    cpcBidFloorMicros?: string;
    /**
     * Required. The chosen revenue (based on conversion data) per unit of spend. Value must be between 0.01 and 1000.0, inclusive.
     */
    targetRoas?: number;
}
