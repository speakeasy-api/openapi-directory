package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Word
 * An object representing a recognized word.
**/
public class Word {
    @JsonProperty("boundingBox")
    public Double[] boundingBox;
    public Word withBoundingBox(Double[] boundingBox) {
        this.boundingBox = boundingBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence")
    public WordConfidenceEnum confidence;
    public Word withConfidence(WordConfidenceEnum confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonProperty("text")
    public String text;
    public Word withText(String text) {
        this.text = text;
        return this;
    }
}