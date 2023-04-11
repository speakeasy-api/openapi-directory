import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains annotation details specific to text sentiment.
 */
export declare class TextSentimentAnnotation extends SpeakeasyBase {
    /**
     * Output only. The sentiment with the semantic, as given to the AutoMl.ImportData when populating the dataset from which the model used for the prediction had been trained. The sentiment values are between 0 and Dataset.text_sentiment_dataset_metadata.sentiment_max (inclusive), with higher value meaning more positive sentiment. They are completely relative, i.e. 0 means least positive sentiment and sentiment_max means the most positive from the sentiments present in the train data. Therefore e.g. if train data had only negative sentiment, then sentiment_max, would be still negative (although least negative). The sentiment shouldn't be confused with "score" or "magnitude" from the previous Natural Language Sentiment Analysis API.
     */
    sentiment?: number;
}
