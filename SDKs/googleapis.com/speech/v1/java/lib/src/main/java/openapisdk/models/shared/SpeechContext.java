package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SpeechContext
 * Provides "hints" to the speech recognizer to favor specific words and phrases in the results.
**/
public class SpeechContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boost")
    public Float boost;
    public SpeechContext withBoost(Float boost) {
        this.boost = boost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phrases")
    public String[] phrases;
    public SpeechContext withPhrases(String[] phrases) {
        this.phrases = phrases;
        return this;
    }
}