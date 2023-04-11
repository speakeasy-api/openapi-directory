import { SpeakeasyBase } from "../../../internal/utils";
import { AnnotationPayload } from "./annotationpayload";
import { ExamplePayload } from "./examplepayload";
/**
 * Response message for PredictionService.Predict.
 */
export declare class PredictResponse extends SpeakeasyBase {
    /**
     * Additional domain-specific prediction response metadata. * For Image Object Detection: `max_bounding_box_count` - (int64) At most that many bounding boxes per image could have been returned. * For Text Sentiment: `sentiment_score` - (float, deprecated) A value between -1 and 1, -1 maps to least positive sentiment, while 1 maps to the most positive one and the higher the score, the more positive the sentiment in the document is. Yet these values are relative to the training data, so e.g. if all data was positive then -1 will be also positive (though the least). The sentiment_score shouldn't be confused with "score" or "magnitude" from the previous Natural Language Sentiment Analysis API.
     */
    metadata?: Record<string, string>;
    /**
     * Prediction result. Translation and Text Sentiment will return precisely one payload.
     */
    payload?: AnnotationPayload[];
    /**
     * Example data used for training or prediction.
     */
    preprocessedInput?: ExamplePayload;
}
