import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. Source of the effective targetCpa value for AdGroup.
 */
export declare enum YoutubeAndPartnersBiddingStrategyAdGroupEffectiveTargetCpaSourceEnum {
    BiddingSourceUnspecified = "BIDDING_SOURCE_UNSPECIFIED",
    BiddingSourceLineItem = "BIDDING_SOURCE_LINE_ITEM",
    BiddingSourceAdGroup = "BIDDING_SOURCE_AD_GROUP"
}
/**
 * The type of the bidding strategy.
 */
export declare enum YoutubeAndPartnersBiddingStrategyTypeEnum {
    YoutubeAndPartnersBiddingStrategyTypeUnspecified = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_UNSPECIFIED",
    YoutubeAndPartnersBiddingStrategyTypeManualCpv = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV",
    YoutubeAndPartnersBiddingStrategyTypeManualCpm = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM",
    YoutubeAndPartnersBiddingStrategyTypeTargetCpa = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA",
    YoutubeAndPartnersBiddingStrategyTypeTargetCpm = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM",
    YoutubeAndPartnersBiddingStrategyTypeMaximizeLift = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_LIFT",
    YoutubeAndPartnersBiddingStrategyTypeMaximizeConversions = "YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSIONS"
}
/**
 * Settings that control the bid strategy for YouTube and Partners resources.
 */
export declare class YoutubeAndPartnersBiddingStrategy extends SpeakeasyBase {
    /**
     * Output only. Source of the effective targetCpa value for AdGroup.
     */
    adGroupEffectiveTargetCpaSource?: YoutubeAndPartnersBiddingStrategyAdGroupEffectiveTargetCpaSourceEnum;
    /**
     * Output only. The effective targetCpa for AdGroup, in micros of advertiser's currency.
     */
    adGroupEffectiveTargetCpaValue?: string;
    /**
     * The type of the bidding strategy.
     */
    type?: YoutubeAndPartnersBiddingStrategyTypeEnum;
    /**
     * The value used by the bidding strategy. When the bidding strategy is assigned at the line item level, this field is only applicable for the following strategy types: * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA` When the bidding strategy is assigned at the ad group level, this field is only applicable for the following strategy types: * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM` If not using an applicable strategy, the value of this field will be 0.
     */
    value?: string;
}
/**
 * Settings that control the bid strategy for YouTube and Partners resources.
 */
export declare class YoutubeAndPartnersBiddingStrategyInput extends SpeakeasyBase {
    /**
     * The type of the bidding strategy.
     */
    type?: YoutubeAndPartnersBiddingStrategyTypeEnum;
    /**
     * The value used by the bidding strategy. When the bidding strategy is assigned at the line item level, this field is only applicable for the following strategy types: * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA` When the bidding strategy is assigned at the ad group level, this field is only applicable for the following strategy types: * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM` If not using an applicable strategy, the value of this field will be 0.
     */
    value?: string;
}
