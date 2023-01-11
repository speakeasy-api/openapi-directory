package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Sentiment
 * Represents the feeling associated with the entire text or entities in the text. Next ID: 6
**/
public class Sentiment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("magnitude")
    public Float magnitude;
    public Sentiment withMagnitude(Float magnitude) {
        this.magnitude = magnitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("score")
    public Float score;
    public Sentiment withScore(Float score) {
        this.score = score;
        return this;
    }
}