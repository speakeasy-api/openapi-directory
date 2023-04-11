import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The creative historical quality score.
 */
export declare enum GoogleAdsSearchads360V0CommonMetricsHistoricalCreativeQualityScoreEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    BelowAverage = "BELOW_AVERAGE",
    Average = "AVERAGE",
    AboveAverage = "ABOVE_AVERAGE"
}
/**
 * The quality of historical landing page experience.
 */
export declare enum GoogleAdsSearchads360V0CommonMetricsHistoricalLandingPageQualityScoreEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    BelowAverage = "BELOW_AVERAGE",
    Average = "AVERAGE",
    AboveAverage = "ABOVE_AVERAGE"
}
/**
 * The historical search predicted click through rate (CTR).
 */
export declare enum GoogleAdsSearchads360V0CommonMetricsHistoricalSearchPredictedCtrEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    BelowAverage = "BELOW_AVERAGE",
    Average = "AVERAGE",
    AboveAverage = "ABOVE_AVERAGE"
}
export declare enum GoogleAdsSearchads360V0CommonMetricsInteractionEventTypesEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Click = "CLICK",
    Engagement = "ENGAGEMENT",
    VideoView = "VIDEO_VIEW",
    None = "NONE"
}
/**
 * Metrics data.
 */
export declare class GoogleAdsSearchads360V0CommonMetrics extends SpeakeasyBase {
    /**
     * The percent of your ad impressions that are shown as the very first ad above the organic search results.
     */
    absoluteTopImpressionPercentage?: number;
    /**
     * The total number of conversions. This includes all conversions regardless of the value of include_in_conversions_metric.
     */
    allConversions?: number;
    /**
     * The total number of conversions. This includes all conversions regardless of the value of include_in_conversions_metric. When this column is selected with date, the values in date column means the conversion date. Details for the by_conversion_date columns are available at https://support.google.com/sa360/answer/9250611.
     */
    allConversionsByConversionDate?: number;
    /**
     * The number of times people clicked the "Call" button to call a store during or after clicking an ad. This number doesn't include whether or not calls were connected, or the duration of any calls. This metric applies to feed items only.
     */
    allConversionsFromClickToCall?: number;
    /**
     * The number of times people clicked a "Get directions" button to navigate to a store after clicking an ad. This metric applies to feed items only.
     */
    allConversionsFromDirections?: number;
    /**
     * All conversions from interactions (as oppose to view through conversions) divided by the number of ad interactions.
     */
    allConversionsFromInteractionsRate?: number;
    /**
     * The value of all conversions from interactions divided by the total number of interactions.
     */
    allConversionsFromInteractionsValuePerInteraction?: number;
    /**
     * The number of times people clicked a link to view a store's menu after clicking an ad. This metric applies to feed items only.
     */
    allConversionsFromMenu?: number;
    /**
     * The number of times people placed an order at a store after clicking an ad. This metric applies to feed items only.
     */
    allConversionsFromOrder?: number;
    /**
     * The number of other conversions (for example, posting a review or saving a location for a store) that occurred after people clicked an ad. This metric applies to feed items only.
     */
    allConversionsFromOtherEngagement?: number;
    /**
     * Estimated number of times people visited a store after clicking an ad. This metric applies to feed items only.
     */
    allConversionsFromStoreVisit?: number;
    /**
     * The number of times that people were taken to a store's URL after clicking an ad. This metric applies to feed items only.
     */
    allConversionsFromStoreWebsite?: number;
    /**
     * The value of all conversions.
     */
    allConversionsValue?: number;
    /**
     * The value of all conversions. When this column is selected with date, the values in date column means the conversion date. Details for the by_conversion_date columns are available at https://support.google.com/sa360/answer/9250611.
     */
    allConversionsValueByConversionDate?: number;
    /**
     * The value of all conversions divided by the total cost of ad interactions (such as clicks for text ads or views for video ads).
     */
    allConversionsValuePerCost?: number;
    /**
     * The average amount you pay per interaction. This amount is the total cost of your ads divided by the total number of interactions.
     */
    averageCost?: number;
    /**
     * The total cost of all clicks divided by the total number of clicks received.
     */
    averageCpc?: number;
    /**
     * Average cost-per-thousand impressions (CPM).
     */
    averageCpm?: number;
    /**
     * The number of clicks.
     */
    clicks?: string;
    /**
     * The number of client account conversions. This only includes conversion actions which include_in_client_account_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.
     */
    clientAccountConversions?: number;
    /**
     * The value of client account conversions. This only includes conversion actions which include_in_client_account_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.
     */
    clientAccountConversionsValue?: number;
    /**
     * The total number of view-through conversions. These happen when a customer sees an image or rich media ad, then later completes a conversion on your site without interacting with (for example, clicking on) another ad.
     */
    clientAccountViewThroughConversions?: string;
    /**
     * The estimated percent of times that your ad was eligible to show on the Display Network but didn't because your budget was too low. Note: Content budget lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
     */
    contentBudgetLostImpressionShare?: number;
    /**
     * The impressions you've received on the Display Network divided by the estimated number of impressions you were eligible to receive. Note: Content impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.
     */
    contentImpressionShare?: number;
    /**
     * The estimated percentage of impressions on the Display Network that your ads didn't receive due to poor Ad Rank. Note: Content rank lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
     */
    contentRankLostImpressionShare?: number;
    /**
     * The number of conversions. This only includes conversion actions which include_in_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.
     */
    conversions?: number;
    /**
     * The sum of conversions by conversion date for biddable conversion types. Can be fractional due to attribution modeling. When this column is selected with date, the values in date column means the conversion date.
     */
    conversionsByConversionDate?: number;
    /**
     * Average biddable conversions (from interaction) per conversion eligible interaction. Shows how often, on average, an ad interaction leads to a biddable conversion.
     */
    conversionsFromInteractionsRate?: number;
    /**
     * The value of conversions from interactions divided by the number of ad interactions. This only includes conversion actions which include_in_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.
     */
    conversionsFromInteractionsValuePerInteraction?: number;
    /**
     * The sum of conversion values for the conversions included in the "conversions" field. This metric is useful only if you entered a value for your conversion actions.
     */
    conversionsValue?: number;
    /**
     * The sum of biddable conversions value by conversion date. When this column is selected with date, the values in date column means the conversion date.
     */
    conversionsValueByConversionDate?: number;
    /**
     * The value of biddable conversion divided by the total cost of conversion eligible interactions.
     */
    conversionsValuePerCost?: number;
    /**
     * The sum of your cost-per-click (CPC) and cost-per-thousand impressions (CPM) costs during this period.
     */
    costMicros?: string;
    /**
     * The cost of ad interactions divided by all conversions.
     */
    costPerAllConversions?: number;
    /**
     * Average conversion eligible cost per biddable conversion.
     */
    costPerConversion?: number;
    /**
     * The cost of ad interactions divided by current model attributed conversions. This only includes conversion actions which include_in_conversions_metric attribute is set to true. If you use conversion-based bidding, your bid strategies will optimize for these conversions.
     */
    costPerCurrentModelAttributedConversion?: number;
    /**
     * Conversions from when a customer clicks on an ad on one device, then converts on a different device or browser. Cross-device conversions are already included in all_conversions.
     */
    crossDeviceConversions?: number;
    /**
     * The sum of the value of cross-device conversions.
     */
    crossDeviceConversionsValue?: number;
    /**
     * The number of clicks your ad receives (Clicks) divided by the number of times your ad is shown (Impressions).
     */
    ctr?: number;
    /**
     * The creative historical quality score.
     */
    historicalCreativeQualityScore?: GoogleAdsSearchads360V0CommonMetricsHistoricalCreativeQualityScoreEnum;
    /**
     * The quality of historical landing page experience.
     */
    historicalLandingPageQualityScore?: GoogleAdsSearchads360V0CommonMetricsHistoricalLandingPageQualityScoreEnum;
    /**
     * The historical quality score.
     */
    historicalQualityScore?: string;
    /**
     * The historical search predicted click through rate (CTR).
     */
    historicalSearchPredictedCtr?: GoogleAdsSearchads360V0CommonMetricsHistoricalSearchPredictedCtrEnum;
    /**
     * Count of how often your ad has appeared on a search results page or website on the Google Network.
     */
    impressions?: string;
    /**
     * The types of payable and free interactions.
     */
    interactionEventTypes?: GoogleAdsSearchads360V0CommonMetricsInteractionEventTypesEnum[];
    /**
     * How often people interact with your ad after it is shown to them. This is the number of interactions divided by the number of times your ad is shown.
     */
    interactionRate?: number;
    /**
     * The number of interactions. An interaction is the main user action associated with an ad format-clicks for text and shopping ads, views for video ads, and so on.
     */
    interactions?: string;
    /**
     * The percentage of clicks filtered out of your total number of clicks (filtered + non-filtered clicks) during the reporting period.
     */
    invalidClickRate?: number;
    /**
     * Number of clicks Google considers illegitimate and doesn't charge you for.
     */
    invalidClicks?: string;
    /**
     * The percentage of mobile clicks that go to a mobile-friendly page.
     */
    mobileFriendlyClicksPercentage?: number;
    /**
     * The percentage of the customer's Shopping or Search ad impressions that are shown in the most prominent Shopping position. See https://support.google.com/sa360/answer/9566729 for details. Any value below 0.1 is reported as 0.0999.
     */
    searchAbsoluteTopImpressionShare?: number;
    /**
     * The number estimating how often your ad wasn't the very first ad above the organic search results due to a low budget. Note: Search budget lost absolute top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
     */
    searchBudgetLostAbsoluteTopImpressionShare?: number;
    /**
     * The estimated percent of times that your ad was eligible to show on the Search Network but didn't because your budget was too low. Note: Search budget lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
     */
    searchBudgetLostImpressionShare?: number;
    /**
     * The number estimating how often your ad didn't show anywhere above the organic search results due to a low budget. Note: Search budget lost top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
     */
    searchBudgetLostTopImpressionShare?: number;
    /**
     * The number of clicks you've received on the Search Network divided by the estimated number of clicks you were eligible to receive. Note: Search click share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.
     */
    searchClickShare?: number;
    /**
     * The impressions you've received divided by the estimated number of impressions you were eligible to receive on the Search Network for search terms that matched your keywords exactly (or were close variants of your keyword), regardless of your keyword match types. Note: Search exact match impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.
     */
    searchExactMatchImpressionShare?: number;
    /**
     * The impressions you've received on the Search Network divided by the estimated number of impressions you were eligible to receive. Note: Search impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.
     */
    searchImpressionShare?: number;
    /**
     * The number estimating how often your ad wasn't the very first ad above the organic search results due to poor Ad Rank. Note: Search rank lost absolute top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
     */
    searchRankLostAbsoluteTopImpressionShare?: number;
    /**
     * The estimated percentage of impressions on the Search Network that your ads didn't receive due to poor Ad Rank. Note: Search rank lost impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
     */
    searchRankLostImpressionShare?: number;
    /**
     * The number estimating how often your ad didn't show anywhere above the organic search results due to poor Ad Rank. Note: Search rank lost top impression share is reported in the range of 0 to 0.9. Any value above 0.9 is reported as 0.9001.
     */
    searchRankLostTopImpressionShare?: number;
    /**
     * The impressions you've received in the top location (anywhere above the organic search results) compared to the estimated number of impressions you were eligible to receive in the top location. Note: Search top impression share is reported in the range of 0.1 to 1. Any value below 0.1 is reported as 0.0999.
     */
    searchTopImpressionShare?: number;
    /**
     * The percent of your ad impressions that are shown anywhere above the organic search results.
     */
    topImpressionPercentage?: number;
    /**
     * The value of all conversions divided by the number of all conversions.
     */
    valuePerAllConversions?: number;
    /**
     * The value of all conversions divided by the number of all conversions. When this column is selected with date, the values in date column means the conversion date. Details for the by_conversion_date columns are available at https://support.google.com/sa360/answer/9250611.
     */
    valuePerAllConversionsByConversionDate?: number;
    /**
     * The value of biddable conversion divided by the number of biddable conversions. Shows how much, on average, each of the biddable conversions is worth.
     */
    valuePerConversion?: number;
    /**
     * Biddable conversions value by conversion date divided by biddable conversions by conversion date. Shows how much, on average, each of the biddable conversions is worth (by conversion date). When this column is selected with date, the values in date column means the conversion date.
     */
    valuePerConversionsByConversionDate?: number;
}
