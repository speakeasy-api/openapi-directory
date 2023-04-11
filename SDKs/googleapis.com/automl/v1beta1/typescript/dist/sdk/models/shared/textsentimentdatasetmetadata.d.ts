import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Dataset metadata for text sentiment.
 */
export declare class TextSentimentDatasetMetadata extends SpeakeasyBase {
    /**
     * Required. A sentiment is expressed as an integer ordinal, where higher value means a more positive sentiment. The range of sentiments that will be used is between 0 and sentiment_max (inclusive on both ends), and all the values in the range must be represented in the dataset before a model can be created. sentiment_max value must be between 1 and 10 (inclusive).
     */
    sentimentMax?: number;
}
