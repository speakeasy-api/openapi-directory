import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An automated bid strategy that sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set.
 */
export declare class GoogleAdsSearchads360V0CommonTargetCpa extends SpeakeasyBase {
    /**
     * Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies.
     */
    cpcBidCeilingMicros?: string;
    /**
     * Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies.
     */
    cpcBidFloorMicros?: string;
    /**
     * Average CPA target. This target should be greater than or equal to minimum billable unit based on the currency for the account.
     */
    targetCpaMicros?: string;
}
