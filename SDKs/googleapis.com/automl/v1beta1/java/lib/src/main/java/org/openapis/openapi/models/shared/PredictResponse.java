/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PredictResponse - Response message for PredictionService.Predict.
 */
public class PredictResponse {
    /**
     * Additional domain-specific prediction response metadata. * For Image Object Detection: `max_bounding_box_count` - (int64) At most that many bounding boxes per image could have been returned. * For Text Sentiment: `sentiment_score` - (float, deprecated) A value between -1 and 1, -1 maps to least positive sentiment, while 1 maps to the most positive one and the higher the score, the more positive the sentiment in the document is. Yet these values are relative to the training data, so e.g. if all data was positive then -1 will be also positive (though the least). The sentiment_score shouldn't be confused with "score" or "magnitude" from the previous Natural Language Sentiment Analysis API.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;

    public PredictResponse withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    
    /**
     * Prediction result. Translation and Text Sentiment will return precisely one payload.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public AnnotationPayload[] payload;

    public PredictResponse withPayload(AnnotationPayload[] payload) {
        this.payload = payload;
        return this;
    }
    
    /**
     * Example data used for training or prediction.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preprocessedInput")
    public ExamplePayload preprocessedInput;

    public PredictResponse withPreprocessedInput(ExamplePayload preprocessedInput) {
        this.preprocessedInput = preprocessedInput;
        return this;
    }
    
    public PredictResponse(){}
}
