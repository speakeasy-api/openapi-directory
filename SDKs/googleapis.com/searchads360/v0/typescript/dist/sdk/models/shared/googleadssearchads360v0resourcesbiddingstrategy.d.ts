import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAdsSearchads360V0CommonMaximizeConversions } from "./googleadssearchads360v0commonmaximizeconversions";
import { GoogleAdsSearchads360V0CommonMaximizeConversionValue } from "./googleadssearchads360v0commonmaximizeconversionvalue";
import { GoogleAdsSearchads360V0CommonTargetCpa } from "./googleadssearchads360v0commontargetcpa";
import { GoogleAdsSearchads360V0CommonTargetImpressionShare } from "./googleadssearchads360v0commontargetimpressionshare";
import { GoogleAdsSearchads360V0CommonTargetOutrankShare } from "./googleadssearchads360v0commontargetoutrankshare";
import { GoogleAdsSearchads360V0CommonTargetRoas } from "./googleadssearchads360v0commontargetroas";
import { GoogleAdsSearchads360V0CommonTargetSpend } from "./googleadssearchads360v0commontargetspend";
/**
 * Output only. The status of the bidding strategy. This field is read-only.
 */
export declare enum GoogleAdsSearchads360V0ResourcesBiddingStrategyStatusEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Enabled = "ENABLED",
    Removed = "REMOVED"
}
/**
 * Output only. The type of the bidding strategy. Create a bidding strategy by setting the bidding scheme. This field is read-only.
 */
export declare enum GoogleAdsSearchads360V0ResourcesBiddingStrategyTypeEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Commission = "COMMISSION",
    EnhancedCpc = "ENHANCED_CPC",
    Invalid = "INVALID",
    ManualCpa = "MANUAL_CPA",
    ManualCpc = "MANUAL_CPC",
    ManualCpm = "MANUAL_CPM",
    ManualCpv = "MANUAL_CPV",
    MaximizeConversions = "MAXIMIZE_CONVERSIONS",
    MaximizeConversionValue = "MAXIMIZE_CONVERSION_VALUE",
    PageOnePromoted = "PAGE_ONE_PROMOTED",
    PercentCpc = "PERCENT_CPC",
    TargetCpa = "TARGET_CPA",
    TargetCpm = "TARGET_CPM",
    TargetImpressionShare = "TARGET_IMPRESSION_SHARE",
    TargetOutrankShare = "TARGET_OUTRANK_SHARE",
    TargetRoas = "TARGET_ROAS",
    TargetSpend = "TARGET_SPEND"
}
/**
 * A bidding strategy.
 */
export declare class GoogleAdsSearchads360V0ResourcesBiddingStrategy extends SpeakeasyBase {
    /**
     * Output only. The number of campaigns attached to this bidding strategy. This field is read-only.
     */
    campaignCount?: string;
    /**
     * Immutable. The currency used by the bidding strategy (ISO 4217 three-letter code). For bidding strategies in manager customers, this currency can be set on creation and defaults to the manager customer's currency. For serving customers, this field cannot be set; all strategies in a serving customer implicitly use the serving customer's currency. In all cases the effective_currency_code field returns the currency used by the strategy.
     */
    currencyCode?: string;
    /**
     * Output only. The currency used by the bidding strategy (ISO 4217 three-letter code). For bidding strategies in manager customers, this is the currency set by the advertiser when creating the strategy. For serving customers, this is the customer's currency_code. Bidding strategy metrics are reported in this currency. This field is read-only.
     */
    effectiveCurrencyCode?: string;
    /**
     * An automated bidding strategy that raises bids for clicks that seem more likely to lead to a conversion and lowers them for clicks where they seem less likely. This bidding strategy is deprecated and cannot be created anymore. Use ManualCpc with enhanced_cpc_enabled set to true for equivalent functionality.
     */
    enhancedCpc?: Record<string, any>;
    /**
     * Output only. The ID of the bidding strategy.
     */
    id?: string;
    /**
     * An automated bidding strategy to help get the most conversion value for your campaigns while spending your budget.
     */
    maximizeConversionValue?: GoogleAdsSearchads360V0CommonMaximizeConversionValue;
    /**
     * An automated bidding strategy to help get the most conversions for your campaigns while spending your budget.
     */
    maximizeConversions?: GoogleAdsSearchads360V0CommonMaximizeConversions;
    /**
     * The name of the bidding strategy. All bidding strategies within an account must be named distinctly. The length of this string should be between 1 and 255, inclusive, in UTF-8 bytes, (trimmed).
     */
    name?: string;
    /**
     * Output only. The number of non-removed campaigns attached to this bidding strategy. This field is read-only.
     */
    nonRemovedCampaignCount?: string;
    /**
     * Immutable. The resource name of the bidding strategy. Bidding strategy resource names have the form: `customers/{customer_id}/biddingStrategies/{bidding_strategy_id}`
     */
    resourceName?: string;
    /**
     * Output only. The status of the bidding strategy. This field is read-only.
     */
    status?: GoogleAdsSearchads360V0ResourcesBiddingStrategyStatusEnum;
    /**
     * An automated bid strategy that sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set.
     */
    targetCpa?: GoogleAdsSearchads360V0CommonTargetCpa;
    /**
     * An automated bidding strategy that sets bids so that a certain percentage of search ads are shown at the top of the first page (or other targeted location).
     */
    targetImpressionShare?: GoogleAdsSearchads360V0CommonTargetImpressionShare;
    /**
     * An automated bidding strategy that sets bids based on the target fraction of auctions where the advertiser should outrank a specific competitor. This strategy is deprecated.
     */
    targetOutrankShare?: GoogleAdsSearchads360V0CommonTargetOutrankShare;
    /**
     * An automated bidding strategy that helps you maximize revenue while averaging a specific target return on ad spend (ROAS).
     */
    targetRoas?: GoogleAdsSearchads360V0CommonTargetRoas;
    /**
     * An automated bid strategy that sets your bids to help get as many clicks as possible within your budget.
     */
    targetSpend?: GoogleAdsSearchads360V0CommonTargetSpend;
    /**
     * Output only. The type of the bidding strategy. Create a bidding strategy by setting the bidding scheme. This field is read-only.
     */
    type?: GoogleAdsSearchads360V0ResourcesBiddingStrategyTypeEnum;
}
