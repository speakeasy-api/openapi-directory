package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Line
 * An object representing a recognized text line.
**/
public class Line {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundingBox")
    public Double[] boundingBox;
    public Line withBoundingBox(Double[] boundingBox) {
        this.boundingBox = boundingBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public Line withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("words")
    public Word[] words;
    public Line withWords(Word[] words) {
        this.words = words;
        return this;
    }
}