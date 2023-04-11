import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An automated bidding strategy that sets bids based on the target fraction of auctions where the advertiser should outrank a specific competitor. This strategy is deprecated.
 */
export declare class GoogleAdsSearchads360V0CommonTargetOutrankShare extends SpeakeasyBase {
    /**
     * Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.
     */
    cpcBidCeilingMicros?: string;
}
