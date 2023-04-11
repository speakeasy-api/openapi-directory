import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A bidding strategy where bids are a fraction of the advertised price for some good or service.
 */
export declare class GoogleAdsSearchads360V0CommonPercentCpc extends SpeakeasyBase {
    /**
     * Maximum bid limit that can be set by the bid strategy. This is an optional field entered by the advertiser and specified in local micros. Note: A zero value is interpreted in the same way as having bid_ceiling undefined.
     */
    cpcBidCeilingMicros?: string;
    /**
     * Adjusts the bid for each auction upward or downward, depending on the likelihood of a conversion. Individual bids may exceed cpc_bid_ceiling_micros, but the average bid amount for a campaign should not.
     */
    enhancedCpcEnabled?: boolean;
}
