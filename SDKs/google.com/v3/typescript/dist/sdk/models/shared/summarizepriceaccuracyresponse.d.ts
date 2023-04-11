import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The current Book on Google price accuracy score.
 */
export declare enum SummarizePriceAccuracyResponseCurrentBookOnGoogleScoreEnum {
    PriceAccuracyStateUnspecified = "PRICE_ACCURACY_STATE_UNSPECIFIED",
    PriceAccuracyStateUnknown = "PRICE_ACCURACY_STATE_UNKNOWN",
    Excellent = "EXCELLENT",
    Good = "GOOD",
    Poor = "POOR",
    AtRisk = "AT_RISK",
    Failed = "FAILED"
}
/**
 * The current price accuracy score combining both website and Book on Google scores.
 */
export declare enum SummarizePriceAccuracyResponseCurrentOverallScoreEnum {
    PriceAccuracyStateUnspecified = "PRICE_ACCURACY_STATE_UNSPECIFIED",
    PriceAccuracyStateUnknown = "PRICE_ACCURACY_STATE_UNKNOWN",
    Excellent = "EXCELLENT",
    Good = "GOOD",
    Poor = "POOR",
    AtRisk = "AT_RISK",
    Failed = "FAILED"
}
/**
 * The current price accuracy score. Contains the same value as `current_website_score`. For clarity, use either `current_website_score` or 'current_overall_score` depending upon which is needed.
 */
export declare enum SummarizePriceAccuracyResponseCurrentScoreEnum {
    PriceAccuracyStateUnspecified = "PRICE_ACCURACY_STATE_UNSPECIFIED",
    PriceAccuracyStateUnknown = "PRICE_ACCURACY_STATE_UNKNOWN",
    Excellent = "EXCELLENT",
    Good = "GOOD",
    Poor = "POOR",
    AtRisk = "AT_RISK",
    Failed = "FAILED"
}
/**
 * The current website price accuracy score.
 */
export declare enum SummarizePriceAccuracyResponseCurrentWebsiteScoreEnum {
    PriceAccuracyStateUnspecified = "PRICE_ACCURACY_STATE_UNSPECIFIED",
    PriceAccuracyStateUnknown = "PRICE_ACCURACY_STATE_UNKNOWN",
    Excellent = "EXCELLENT",
    Good = "GOOD",
    Poor = "POOR",
    AtRisk = "AT_RISK",
    Failed = "FAILED"
}
/**
 * The predicted Book on Google price accuracy score.
 */
export declare enum SummarizePriceAccuracyResponsePredictedBookOnGoogleScoreEnum {
    PriceAccuracyStateUnspecified = "PRICE_ACCURACY_STATE_UNSPECIFIED",
    PriceAccuracyStateUnknown = "PRICE_ACCURACY_STATE_UNKNOWN",
    Excellent = "EXCELLENT",
    Good = "GOOD",
    Poor = "POOR",
    AtRisk = "AT_RISK",
    Failed = "FAILED"
}
/**
 * The predicted price accuracy score combining both website and Book on Google scores.
 */
export declare enum SummarizePriceAccuracyResponsePredictedOverallScoreEnum {
    PriceAccuracyStateUnspecified = "PRICE_ACCURACY_STATE_UNSPECIFIED",
    PriceAccuracyStateUnknown = "PRICE_ACCURACY_STATE_UNKNOWN",
    Excellent = "EXCELLENT",
    Good = "GOOD",
    Poor = "POOR",
    AtRisk = "AT_RISK",
    Failed = "FAILED"
}
/**
 * The predicted price accuracy score. Contains the same value as `predicted_website_score`. For clarity, use either `predicted_website_score` or 'predicted_overall_score` depending upon which is needed.
 */
export declare enum SummarizePriceAccuracyResponsePredictedScoreEnum {
    PriceAccuracyStateUnspecified = "PRICE_ACCURACY_STATE_UNSPECIFIED",
    PriceAccuracyStateUnknown = "PRICE_ACCURACY_STATE_UNKNOWN",
    Excellent = "EXCELLENT",
    Good = "GOOD",
    Poor = "POOR",
    AtRisk = "AT_RISK",
    Failed = "FAILED"
}
/**
 * The predicted website price accuracy score.
 */
export declare enum SummarizePriceAccuracyResponsePredictedWebsiteScoreEnum {
    PriceAccuracyStateUnspecified = "PRICE_ACCURACY_STATE_UNSPECIFIED",
    PriceAccuracyStateUnknown = "PRICE_ACCURACY_STATE_UNKNOWN",
    Excellent = "EXCELLENT",
    Good = "GOOD",
    Poor = "POOR",
    AtRisk = "AT_RISK",
    Failed = "FAILED"
}
/**
 * Response message for PriceAccuracyViewService.SummarizePriceAccuracy.
 */
export declare class SummarizePriceAccuracyResponse extends SpeakeasyBase {
    /**
     * The current Book on Google price accuracy score.
     */
    currentBookOnGoogleScore?: SummarizePriceAccuracyResponseCurrentBookOnGoogleScoreEnum;
    /**
     * The current price accuracy score combining both website and Book on Google scores.
     */
    currentOverallScore?: SummarizePriceAccuracyResponseCurrentOverallScoreEnum;
    /**
     * The current price accuracy score. Contains the same value as `current_website_score`. For clarity, use either `current_website_score` or 'current_overall_score` depending upon which is needed.
     */
    currentScore?: SummarizePriceAccuracyResponseCurrentScoreEnum;
    /**
     * The current website price accuracy score.
     */
    currentWebsiteScore?: SummarizePriceAccuracyResponseCurrentWebsiteScoreEnum;
    /**
     * The predicted Book on Google price accuracy score.
     */
    predictedBookOnGoogleScore?: SummarizePriceAccuracyResponsePredictedBookOnGoogleScoreEnum;
    /**
     * The predicted price accuracy score combining both website and Book on Google scores.
     */
    predictedOverallScore?: SummarizePriceAccuracyResponsePredictedOverallScoreEnum;
    /**
     * The predicted price accuracy score. Contains the same value as `predicted_website_score`. For clarity, use either `predicted_website_score` or 'predicted_overall_score` depending upon which is needed.
     */
    predictedScore?: SummarizePriceAccuracyResponsePredictedScoreEnum;
    /**
     * The predicted website price accuracy score.
     */
    predictedWebsiteScore?: SummarizePriceAccuracyResponsePredictedWebsiteScoreEnum;
    /**
     * The update timestamp for the current score.
     */
    updateTime?: string;
}
