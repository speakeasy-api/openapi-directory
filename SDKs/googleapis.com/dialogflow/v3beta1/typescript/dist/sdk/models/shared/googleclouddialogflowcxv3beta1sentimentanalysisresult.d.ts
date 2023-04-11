import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral.
 */
export declare class GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult extends SpeakeasyBase {
    /**
     * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
     */
    magnitude?: number;
    /**
     * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
     */
    score?: number;
}
