import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An automated bid strategy that sets your bids to help get as many clicks as possible within your budget.
 */
export declare class GoogleAdsSearchads360V0CommonTargetSpend extends SpeakeasyBase {
    /**
     * Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy.
     */
    cpcBidCeilingMicros?: string;
    /**
     * The spend target under which to maximize clicks. A TargetSpend bidder will attempt to spend the smaller of this value or the natural throttling spend amount. If not specified, the budget is used as the spend target. This field is deprecated and should no longer be used. See https://ads-developers.googleblog.com/2020/05/reminder-about-sunset-creation-of.html for details.
     */
    targetSpendMicros?: string;
}
