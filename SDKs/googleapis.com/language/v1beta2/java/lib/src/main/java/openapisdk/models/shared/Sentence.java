package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Sentence
 * Represents a sentence in the input document.
**/
public class Sentence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sentiment")
    public Sentiment sentiment;
    public Sentence withSentiment(Sentiment sentiment) {
        this.sentiment = sentiment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public TextSpan text;
    public Sentence withText(TextSpan text) {
        this.text = text;
        return this;
    }
}