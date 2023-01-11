package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1SentimentData
 * The data for a sentiment annotation.
**/
public class GoogleCloudContactcenterinsightsV1SentimentData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("magnitude")
    public Float magnitude;
    public GoogleCloudContactcenterinsightsV1SentimentData withMagnitude(Float magnitude) {
        this.magnitude = magnitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Float score;
    public GoogleCloudContactcenterinsightsV1SentimentData withScore(Float score) {
        this.score = score;
        return this;
    }
}